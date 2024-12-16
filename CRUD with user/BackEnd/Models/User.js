const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    UserName: {type: String, required: true},
    Eamil: {type: String, required: true},
    Password: {type: Number, required: true},

});
const User = mongoose.model('User', UserSchema);
module.exports = User;