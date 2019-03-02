var express = require('express');
var postRoute = express.Router();

postRoute.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'sucess',
        message: 'post fetched sucessfully',
        data: 'post'
    });
})

module.exports = postRoute;
