var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    userId: String,
    postId: String,
    title: String,
    body: String
});
module.exports = mongoose.model('Post', postSchema);