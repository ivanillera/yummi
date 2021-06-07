const express = require('express')
const morgan = require('morgan')

const app = express()

// Enviroment variables.
app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'))

app.use("/api/users", require('./routes/users.routes'))

module.exports = app;