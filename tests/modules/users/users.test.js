const expect = require('chai').expect;

var express = require('express');
var userRoute = express.Router();
var mongoose = require('mongoose');

var User = require('../../../api/modules/users/user.model');
// var isAuthorized = require('../../middlewares/authorization');

const USERROUTE = require('../../../api/modules/users/users.controller');


describe('Users get all', function () {
    describe('userRoute.get()', function () {
        it('should get all users list without error', function (done) {
            User.find(function (err) {
                if (err) done(err);
                else done();
            });
        });

    });
});