/** Dependencies */
// Nodemailer
const nodemailer = require('nodemailer')

/** Env Variables */
const {
    // Gmail's Email (Gmail Access)
    GMAIL_EMAIL = process.env.GMAIL_EMAIL,
    // Sender's Email
    SENDER_EMAIL = 'anyemail@anydomain.anyextension',
    // Gmail Client ID
    CLIENT_ID = process.env.GMAIL_CLIENT_ID,
    // Gmail Client Secret
    CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET,
    // Gmail Refresh Token
    REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN
} = process.env

/** Email Functions Handler */
// REQUESTOR Noty Email
async function sendMail2Requestor(requestorEmail) {
    // - Create Nodemailer TRANSPORT INFO
    let transport = nodemailer.createTransport({
        // Service 
        service: 'Gmail',
        // Auth
        auth: {
            type: 'OAuth2',
            // Email use to send email (Your Google Email. Eg: xxx@gmail.com)
            user: GMAIL_EMAIL,
            // Get in Google Console API (GMAIL API)
            clientId: CLIENT_ID,
            // Get in Google Console API (GMAIL API)
            clientSecret: CLIENT_SECRET,
            // Get from Google OAuth2.0 Playground (Using Cliet ID & Client Secret Key)
            refreshToken: REFRESH_TOKEN
        }
    })

    // - body of Message
    let mailBody = `
        <div>
            <p>Hi! <b>${requestorEmail}</b></p>
            <p>Thank you for subscribing with us at https://lalapolalaanewb.com</p>
        </div>
        <div>
            <p>Sincerely,</p>
            <p>System [<b>Lalapolalaa Newb</b>]</p>
        </div>
    `

    // - Create BODY of mail
    let mailOptions = {
        // Email should be SAME as USER EMAIL above     
        from: `FMCalc System <${SENDER_EMAIL}>`,
        // ANY Email to send the mail (to send to many use ',' inside the single quote. Eg: 'xxx@gmail.com, xxx@yahoo.com')
        to: requestorEmail,
        subject: `[Newsletter Subscription]`,
        // TEXT cannot apply any HTML Elements (use either TEXT or HTML)
        // text: 'Hey there, it’s our first message sent with Nodemailer ',
        // HTML can apply any HTML Elements (use either TEXT or HTML)
        html: mailBody
    }

    // send email
    return await transport.sendMail(mailOptions)
    .then(success => 'Successful!')
    .catch(err => 'Unsuccesful!')
}

/** Export */
module.exports = { sendMail2Requestor }