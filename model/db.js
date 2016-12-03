var mongoose = require('mongoose');
var bcrypt = require('mongoose-bcrypt');
var findOrCreate = require('mongoose-findorcreate');
var User = require('./User.js');
var Group = require('./Group.js');

mongoose.connect('mongodb://localhost/secret-santa');
var db = mongoose.connection;
// db.once('open', function(){
//     console.log("test");
// });

// var testGroup = Group.create({
//     name: 'Test Group',
// });



var testGroup = Group.findOrCreate({ name: 'Test Group' },
    function(err, group, created) {
        User.create({
            email: 'test@test.com',
            password: 'test',
            groups: [group._id]
        }, function(err, user){
            var userQuery = User.findOne({ email: 'test@test.com' }, function(err, user){ console.log(user.groups); });
        });
    }
);
// console.log(testGroup._id)

// console.log(testUser.groups);
