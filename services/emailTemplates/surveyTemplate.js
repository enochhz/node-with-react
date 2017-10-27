const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <head>
        <style>
          #block_container {
            text-align: center;
          }
          #yes, #no {
            display: inline;
          }
        </style>
      </head>
      <body>
        <div style='text-align: center;'>
          <h1>Please help us to import our servie for you!</h1>
          <h3>Please answer the following questions:</h3>
          <h3>${survey.body}</h3>

          <div id="block_container">
            <div id="yes"><a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a></div>
            <div id="no"><a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a></div>
          </div>
        </div>
      </body>
    </html>
  `;
};
