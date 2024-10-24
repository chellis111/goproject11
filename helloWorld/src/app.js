const express = require('express');
const dataSanitizer = require('./email_sender/middleware/dataSanitizer');
const dataValidator = require('./email_sender/middleware/dataValidator');
const app = express();
const transporter = require('./email_sender/helpers/smtpTransport');
const envVariables = require('./email_sender/constants/index');

app.use(express.json());

const { USER_EMAIL } = envVariables;
app.get('/', (req, res) => {
    res.send('This is our email sender app');
});

app.post('/email/send', dataValidator, dataSanitizer, async (req, res) => {
    const { email, message } = req.body;

    const mailOptions = {
        to: email,
        from: USER_EMAIL,
        subject: 'Test email service',
        html: `<h1>${message}</h1>`,
    };

    transporter.sendMail(mailOptions, (error,info) => {
        if(error){
            console.log(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        console.log(`Email sent: ${info.response}`);
        return res.status(200).json({ message: 'Email sent successfully' });
    });
});

module.exports = app; // Export the app object