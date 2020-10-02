/** Dependencies */
// Express Router
const router = require('express').Router()
// Email Handler
const { sendMail2Requestor } = require('../controllers/email')

/** Vars */
// Subscribe Users (should be using DB)
let users = []

/** Page Specific Functions */
// Home page Template
function homeTemplate(errorMessage) {
    return `
    <div style="position: relative; min-height: 100vh; display: flex; flex-flow: column; align-items: center; justify-content: center;">
        <h2 style="margin: 0;">Get Newsletter from us from NOW!</h2>
        <p>${errorMessage === null ? '' : errorMessage}</p>
        <form action="/" method="POST" style="position: relative; margin-top: 30px; display: flex; flex-flow: column; align-items: center; justify-content: center;">
            <input type="email" name="email" placeholder="Your Email" required/>
            <button type="submit" style="margin-top: 15px;">Submit</button>
        </form>
    </div>
`
}

/** Routes */
// HOME Get Route (Display Home page)
router.get('/', (req, res) => {
    // render Home page
    res.send(homeTemplate(null))
})

// HOME Post Route
router.post('/', async(req, res) => {
    let { email } = req.body

    // default error message
    let errorMessage = 'Successfully subscribe to our Newsletter!'

    // check if user already subscribed
    let userExist
    users.forEach(user => {
        if(user === email) userExist = true
        else userExist = false
    })
    if(userExist === true) return res.send(homeTemplate('You already subscribed to our Newsletter. Thanks for your subscription!')) 

    // send mail notification to Requestor (Customer)
    const requestorNoty = await sendMail2Requestor(email)
    if(requestorNoty === 'Unsuccessful!') errorMessage = errorMessage + 'Unfortunately, failed to send notification to your email.'

    // add user to subscribed list
    users.push(email)

    // re-render Home page
    res.send(homeTemplate(errorMessage))
})

/** Export */
module.exports = router