var express = require('express');
var userRoute = express.Router();

var User = require('./user.model');
var isAuthorized = require('../../middlewares/authorization');

userRoute.get('/all', isAuthorized, (req, res) => {
    User.find().then((users) => {
        res.status(200).json({
            status: 'success',
            message: 'users fetched successfully',
            data: users
        });
    })
})

userRoute.get('/:id', isAuthorized, (req, res) => {
    var id = req.params.id;
    User.findById(id).then((user) => {
        res.status(200).json({
            status: 'success',
            message: 'user fetched successfully',
            data: user
        });
    })
})

userRoute.delete('/:id', (req, res) => {
    var id = req.params.id;
    User.findByIdAndDelete(id).then((user) => {
        res.status(200).json({
            status: 'sucess',
            message: 'user deleted successfully'
        });
    })
})

userRoute.put('/:id', (req, res) => {
    var id = req.params.id;
    User.findByIdAndUpdate(id, {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        mobileNo: req.body.mobileNo,
        password: req.body.password
    }).then(() => res.status(200).json({
        status: 'sucess',
        message: 'user updated successfully'
    }));
})

userRoute.post('/', (req, res) => {
    var user = new User({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        mobileNo: req.body.mobileNo,
        password: req.body.password
    });
    console.log(user);
    user.save().then(() => res.status(200).send({
        status: 'sucess',
        message:'new user saved'
    }));
})

module.exports = userRoute;