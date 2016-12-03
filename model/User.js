var mongoose = require('mongoose');
var bcrypt = require('mongoose-bcrypt');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true, bcrypt: true },
    likes: [String],
    hates: [String],
    address: String,
    dietRequirements: [String],
    groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }]
});

userSchema.plugin(bcrypt);

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;
