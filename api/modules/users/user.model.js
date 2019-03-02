var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// user Schema
var userSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: String,
    email: {
        type: String,
        required: 'Email is required'
    },
    mobileNo: String,
    password: {
        type: String,
        required: 'Password is required'
    }
});
module.exports = mongoose.model('User', userSchema);
