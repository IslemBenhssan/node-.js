const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'benhasanislem@gmail.com',
      pass: 'iedt rqrc rsgz viad' // Pas de virgule ici
    }
});

const mailOptions = {
    from: 'benhasanislem@gmail.com',
    to: 'nejahyengui1290@gmail.com',
    subject: 'Test Email',
    text: '.test'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
