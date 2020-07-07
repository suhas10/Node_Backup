const express = require('express');
const app = express();
const routeContact = require('./api/routes/contact');
const routeHome = require('./api/routes/home');
const routeMenu = require('./api/routes/menu');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/home',routeHome);
app.use('/menu',routeMenu);
app.use('/contact',routeContact);

module.exports = app;