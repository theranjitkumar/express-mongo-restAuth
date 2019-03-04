var express = require('express');
var accountRoute = express.Router();
var jwt = require('jsonwebtoken');

var mongoose = require('mongoose');
var User = require('../users/user.model');

accountRoute.post('/', (req, res, next) => {
    const user = {
        email: 'test@email.com',
        password: 'password'
    }
    jwt.sign({
        user: user
    }, 'mysecret', (err, token) => {
        res.json({
            token: token,
        })
    });

})

module.exports = accountRoute;