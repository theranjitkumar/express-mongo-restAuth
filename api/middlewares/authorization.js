var express = require('express');
// formate of token
// Authorization: bearer <access_token>
var isAuthorized = (req, res, next) => {
    const bearerHeader = req.header('Authorization');
    console.log(bearerHeader);
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
    } else {
        res.sendStatus(401);
    }
    next();
}
module.exports = isAuthorized;