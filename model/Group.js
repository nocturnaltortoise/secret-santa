var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var groupSchema = mongoose.Schema({
    name: String,
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

var groupModel = mongoose.model('Group', groupSchema);

module.exports = groupModel;
