const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const keys = require("../config/keys");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: keys.sendGridKey,
    },
  })
);

module.exports = ({ subject, recipients }, template) => {
  console.log(recipients);
  return transporter.sendMail({
    to: recipients.map(({ email }) => email),
    from: "sambitnayakcse@gmail.com",
    subject: subject,
    html: template,
  });
};
