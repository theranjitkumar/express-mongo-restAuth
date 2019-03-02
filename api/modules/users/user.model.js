var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// user Schema
var userSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: String,
    email: String,
    mobileNo: Number,
    password: String
});
module.exports = mongoose.model('User', userSchema);
