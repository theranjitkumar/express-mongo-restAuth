var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var Logger = require('./api/middlewares/customLogger');
var env = require('./config/env');

// mongoose dependency start
var mongoose = require('mongoose');
//  const db = process.env.localMongoDB; // local systme connection string
const db = `mongodb+srv://${process.env.MONGO_ATLAS_USER_NAME}:${process.env.MONGO_ATLAS_PWD}@cluster0-0epmu.mongodb.net/${process.env.MONGO_ATLAS_DB_NAME}`; // mongodb cloud atlas connection string

mongoose.connect(db, {
    useNewUrlParser: true
})
// mongoose dependency end

// console.log(process.env.localMongoDB);


var accountRoute = require('./api/modules/account/account.controller');
var userRoute = require('./api/modules/users/users.controller');
var postRoute = require('./api/modules/blog/post.routes');

var app = express();

app.use(Logger);

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) =>{
//     res.header('Access-Controll-Allow-Origin', '*');
//     res.header('Access-Controll-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     if(req.method === 'OPTIONS'){
//         res.header('Access-Controll-Allow-Method', 'PUT, POST, PATCH DELETE');
//         res.status(200).json({});
//     }
// })

app.use('/openApi/login', accountRoute);
app.use('/openApi/users', userRoute);
postRoute(app);

// custom error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    res.status(404);
    next(err);
})
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: { message: err.message }
    });
})
// custom error handler end

module.exports = app;
