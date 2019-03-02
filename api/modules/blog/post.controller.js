var express = require('express');
var postRoute = express.Router();

postRoute.get('/', function(req, res){
    res.send('post');
})

module.exports = postRoute;
