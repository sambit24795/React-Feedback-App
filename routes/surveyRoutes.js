const mongoose = require("mongoose");

const requireLogin = require("../middlewares/auth");
const requireCredits = require("../middlewares/creditsCheck");
const surveyTemplate = require("../services/emailTemplate/surveyTemplate");
const Survey = require("../models/survery");
const sendMail = require("../services/nodemailer-transport");
const survery = require("../models/survery");

module.exports = (app) => {
  app.get("/api/surveys/thanks", (req, res) => {
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
};
