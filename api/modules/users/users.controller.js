var express = require('express');
var userRoute = express.Router();
var mongoose = require('mongoose');

var User = require('./user.model');
var isAuthorized = require('../../middlewares/authorization');

userRoute.get('/', isAuthorized, (req, res) => {
    User.find().then((users) => {
        res.status(200).json({
            status: 'true',
            message: 'users fetched successfully',
            data: users
        });
    }).catch((err) => res.status(500).json({
        status: 'false',
        message: err
    }));
})

userRoute.get('/:id', isAuthorized, (req, res) => {
    var id = req.params.id;
    User.findById(id).then((user) => {
        res.status(200).json({
            status: 'true',
            message: 'user fetched successfully',
            data: user
        });
    }).catch((err) => res.status(500).json({
        status: 'false',
        message: err
    }));
})

userRoute.delete('/:id', isAuthorized, (req, res) => {
    var id = req.params.id;
    User.findByIdAndDelete(id).then((user) => {
        res.status(200).json({
            status: 'true',
            message: 'user deleted successfully'
        });
    }).catch((err) => res.status(500).json({
        status: 'false',
        message: err
    }));
})

userRoute.put('/:id', isAuthorized, (req, res) => {
    var id = req.params.id;
    User.findByIdAndUpdate(id, {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        mobileNo: req.body.mobileNo,
        password: req.body.password
    }).then(() => res.status(200).json({
        status: 'true',
        message: 'user updated successfully'
    })).catch((err) => res.status(500).json({
        status: 'false',
        message: err
    }));
})

userRoute.post('/', (req, res) => {
    var user = new User({
        id: new mongoose.Types.ObjectId,
        name: req.body.name || 'Stranger',
        email: req.body.email,
        mobileNo: req.body.mobileNo || 'NA',
        password: req.body.password
    });
    console.log(user);
    user.save().then(() => res.status(200).json({
        status: 'true',
        message: 'new user saved'
    })).catch((err) => res.status(500).json({
        status: 'false',
        message: err
    }));
})

module.exports = userRoute;