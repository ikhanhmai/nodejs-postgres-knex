const aws = require('aws-sdk');
// use AWS global variables
aws.config.accessKeyId = 'AKIAI4LWPLHE6VWI5ANQ';
aws.config.secretAccessKey = '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';
aws.config.region = 'us-east-1';

// Create an Email function
function Email(to, sub, content) {
  let ses = new aws.SES();

  let from = 'khanh.mai.steinsvik@gmail.com'; // The email address added here must be verified in Amazon SES
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
