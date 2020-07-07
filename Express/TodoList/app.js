const express = require('express');
const homePageRoute = require('./api/routes/homePage');
const app = express();
const expresHandleBars = require('express-handlebars');
const path = require('path');
const publicPath = path.resolve(__dirname,'public');

app.engine('handlebars', expresHandleBars());
app.set('view engine', 'handlebars');

app.use(express.static(publicPath));
app.use('/home', homePageRoute);

module.exports = app;