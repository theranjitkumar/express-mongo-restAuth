'use strict';
module.exports = function (app) {
  var posts = require('./post.controller');

  app.route('/openApi/posts')
    .get(posts.all)
    .post(posts.create);

  app.route('/openApi/posts/:id')
    .get(posts.read)
    .put(posts.update)
    .delete(posts.delete);
};