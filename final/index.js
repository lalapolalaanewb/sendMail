/** Dependencies */
// Express
const express = require('express')
const app = express()
// Dotenv
const dotenv = require('dotenv')
dotenv.config()

/** Global Middlewares */
// JSON Body Parser
app.use(express.urlencoded({ extended: false }))

/** Routes Middleware */
// Home
app.use('/', require('./routes/home'))

/** Server Startup */
app.listen(process.env.PORT || 3030, console.log(`Server is up & running at PORT ${process.env.PORT}!`))