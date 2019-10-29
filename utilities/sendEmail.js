const aws = require('aws-sdk');
// use AWS global variables
aws.config.accessKeyId = process.env.AWS_ACCESSKEYID;
aws.config.secretAccessKey = process.env.AWS_SECRETACCESSKEY;
aws.config.region = process.env.AWS_REGION;

// Create an Email function
function Email(to, sub, content) {
  let ses = new aws.SES();

  let from = process.env.SENDER; // The email address added here must be verified in Amazon SES
  //Amazon SES email format
  ses.sendEmail(
    {
      Source: from,
      Destination: { ToAddresses: to },
      Message: {
        Subject: {
          Data: sub
        },
        Body: {
          Html: {
            Data: content
          }
        }
      }
    },
    function(err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log('Email sent:');
        console.log(data);
      }
    }
  );
}
// Export the Email function
module.exports = {
  Email
};
