'use strict';

var mongoose = require('mongoose');
var Post = require('./post.model'); //mongoose.model('Posts');

exports.all = function(req, res) {
  Post.find({}, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};

exports.create = function(req, res) {
  var post = new Post(req.body);
  console.log(req);
  post.save(function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};

exports.read = function(req, res) {
  Post.findById(req.params.id, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};

exports.update = function(req, res) {
  Post.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};

exports.delete = function(req, res) {
  Post.remove({
    _id: req.params.id
  }, function(err, post) {
    if (err)
      res.send(err);
    res.json({ message: 'Post successfully deleted' });
  });
};