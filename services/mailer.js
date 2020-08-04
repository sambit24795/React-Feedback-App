const sendGrid = require("sendgrid");

const keys = require("../config/keys");

const helper = sendGrid.mail;

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sendGridApi = sendGrid(keys.sendGridKey);
    this.from_email = new helper.Email("sambitnayakcse@gmail.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addC;
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addMailSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach((recipient) => personalize.addTo(recipient));
    this.addPersonalization(personalize);
  }

  async send() {
    try {
      const request = this.sendGridApi.emptyRequest({
        mathod: "POST",
        path: "/v3/mail/send",
        body: this.toJSON(),
      });
      const response = await this.sendGridApi.API(request);
      return response;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}

module.exports = Mailer;
