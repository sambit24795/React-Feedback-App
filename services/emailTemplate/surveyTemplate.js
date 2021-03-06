const keys = require("../../config/keys");

module.exports = (survey) => {
  return `
  <html>
    <body>
      <div style="text-align: center"></div>
      <p>Please give feedback</p>
      <p>${survey.body}</p>
      <div>
        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
      </div>
      <div>
        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
      </div>
    </body>
  </html>`;
};
