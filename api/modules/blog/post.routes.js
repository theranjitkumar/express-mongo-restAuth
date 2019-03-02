'use strict';
module.exports = function (app) {
  var posts = require('./post.controller');

  app.route('/posts')
    .get(posts.all)
    .post(posts.create);

  app.route('/posts/:id')
    .get(posts.read)
    .put(posts.update)
    .delete(posts.delete);
};