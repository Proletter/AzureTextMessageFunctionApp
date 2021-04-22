const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNumber = process.env.PHONE_NUMBER
const recipient = process.env.RECIPIENT

const client = require('twilio')(accountSid, authToken);
const messages = require('./Messages.js').msg()
const messageNumber = Math.floor(Math.random() * messages.length)

module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    if (myTimer.IsPastDue)
    {
        context.log('JavaScript is running late! There are issues');
        
    }
    return client.messages
    .create({
          body: messages[messageNumber].msg,
          from: phoneNumber,
           to: recipient
        })
    .then(message => context.log('message sent on:', timeStamp, message))
     
};






