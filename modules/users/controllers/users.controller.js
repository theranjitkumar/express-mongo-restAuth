var express = require('express');
var userRoute = express.Router();

var User = require('../models/user.model');
var isAuthorized = require('../../../middlewares/authorization');

userRoute.get('/all', isAuthorized, function (req, res) {
    User.find().then((users) => {
        console.log('users fetched');
        res.json(users);
    })
})

userRoute.get('/:id', isAuthorized, function (req, res) {
    var id = req.params.id;
    User.findById(id).then((user) => {
        res.json(user);
    })
})

userRoute.delete('/:id', function (req, res) {
    var id = req.params.id;
    User.findByIdAndDelete(id).then((user) => {
        res.send('deleted successfully');
    })
})

userRoute.put('/:id', function (req, res) {
    var id = req.params.id;
    User.findByIdAndUpdate(id, {
        userName: 'updated name',
    }).then(() => res.send('user updated'));
})

userRoute.post('', function (req, res) {
    var user = new User({
        userId: req.body.userId,
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userMobieNo: req.body.userMobieNo
    });
    console.log(user);
    user.save().then(() => res.send('new user saved'));
})


module.exports = userRoute;
