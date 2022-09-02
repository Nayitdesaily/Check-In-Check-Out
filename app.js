const express = require('express');

//Init express app
const app = express();

//Enable express app to receive JSON data
app.use(express.json());

//Router
const { registrationRouter } = require('./routes/registration.route');

//Registration endpoint
app.use('/registrations', registrationRouter);

module.exports = { app };
