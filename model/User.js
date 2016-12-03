var mongoose = require('mongoose');
var bcrypt = require('mongoose-bcrypt');

var userSchema = mongoose.Schema({
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true, bcrypt: true },
    likes: [{ like: String }],
    hates: [{ hate: String }],
    address: String,
    dietRequirements: [{ requirement: String }]
});

userSchema.plugin(bcrypt);

var userModel = mongoose.model('User', userSchema);

var exports = module.exports = userModel;
