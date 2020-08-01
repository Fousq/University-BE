var express = require('express');
var authRouter = require('./routes/auth.router.js');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRouter);


module.exports = app;
