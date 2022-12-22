const Twilio = require("twilio");

const client = new Twilio("ACeacccb279f0268de09143626929de2a8", "8e6f6629ae272e4e744b5b9f0be7852b");

client.messages.list().then((messages) => {
    console.log(`The most recent message is ${messages[0].body}`)
}).catch((error) => {console.log(error)});

console.log("Gathering your message log");