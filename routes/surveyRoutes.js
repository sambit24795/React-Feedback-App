const mongoose = require("mongoose");
const { Path } = require("path-parser");
const { URL } = require("url");
const _ = require("lodash");

const requireLogin = require("../middlewares/auth");
const requireCredits = require("../middlewares/creditsCheck");
const surveyTemplate = require("../services/emailTemplate/surveyTemplate");
const Survey = require("../models/survery");
const sendMail = require("../services/nodemailer-transport");

module.exports = (app) => {
  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    res.send("Thanks for your feedback");
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title: title,
      subject: subject,
      body: body,
      recipients: recipients.split(",").map((email) => ({
        email: email.trim(),
      })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    try {
      await sendMail(survey, surveyTemplate(survey));
      await survey.save();
      req.user.credits -= 100;
      req.user.save();
      res.send(req.user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post("/api/surveys/webhooks", (req, res) => {
    const p = Path.createPath("/api/surveys/:surveyId/:choice");

    _.chain(req.body)
      .map((event) => {
        const pathname = new URL(event.url).pathname;
        const match = p.test(pathname);
        if (match) {
          return {
            email: event.email,
            surveyId: match.surveyId,
            choice: match.choice,
          };
        }
      })
      .compact()
      .uniqBy("email", "surveyId")
      .each(({ surveyId, email, choice }) => {
        console.log(choice);
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, resonded: false },
            },
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.respond": true },
            lastResponded: new Date()
          }
        ).exec();
      });

    res.send({});
  });
};
