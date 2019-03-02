var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    postId: String,
    commentId: String,
    name: String,
    email: String,
    body: String
});
module.exports = mongoose.model('Comment', commentSchema);