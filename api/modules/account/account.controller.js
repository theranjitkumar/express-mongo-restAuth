var express = require('express');
var accountRoute = express.Router();
var jwt = require('jsonwebtoken');

var mongoose = require('mongoose');
var User = require('../users/user.model');

accountRoute.post('/', (req, res, next) => {
    User.findOne({
        'email': req.body.email,
        'password': req.body.password
    }).then((user) => {
        console.log(user);
        if (user === null) {
            res.json({
                message: 'User Not Found'
            })
        } else {
            // const user = {
            //     email: 'test@email.com',
            //     password: 'password'
            // }
            jwt.sign({
                user: user
            }, 'authsecret', {
                expiresIn: '10h'
            }, (err, token) => {
                res.json({
                    token: token,
                })
            });
        }

    })

})

module.exports = accountRoute;