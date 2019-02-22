var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// mongoose dependency start
var mongoose = require('mongoose');
var db = 'mongodb://localhost:27017/meanBlog';

mongoose.connect(db, {
    useNewUrlParser: true
})
// mongoose dependency end

var postRoute = require('./modules/blog/controllers/post.controller');
var userRoute = require('./modules/users/controllers/users.controller');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRoute);
app.use('/post', postRoute);

module.exports = app;
