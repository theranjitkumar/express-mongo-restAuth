var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Logger = require('./api/middlewares/customLogger');

// mongoose dependency start
var mongoose = require('mongoose');
// const db = 'mongodb://localhost:27017/meanBlog'; // local systme connection string
const db = 'mongodb+srv://mongo:mongo@cluster0-0epmu.mongodb.net/meanApp'; // mongodb cloud atlas connection string

mongoose.connect(db, {
    useNewUrlParser: true
})
// mongoose dependency end

var postRoute = require('./api/modules/blog/post.controller');
var userRoute = require('./api/modules/users/users.controller');

var app = express();

app.use(Logger);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRoute);
app.use('/post', postRoute);

module.exports = app;
