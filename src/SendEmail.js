const nodemailer = require('nodemailer');
const emailUser = 'zess-consulting@gmx.net';
const emailPassword = 'zessconsulting!A17/1';
const transporter = nodemailer.createTransport({
  host: 'smtp.ionos.de',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: emailUser,
    pass: emailPassword,
  },
});
const mailOptions = {
  from: 'maksimnopp@gmail.com',
  to: 'info@zess-consulting.de',
  subject: 'Test Email',
  text: 'This is a test email from Node.js using Ionos SMTP.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error sending email:', error);
  }
  console.log('Email sent:', info.response);
});
