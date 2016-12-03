var mongoose = require('mongoose');
var bcrypt = require('mongoose-bcrypt');
var User = require('./User.js');

mongoose.connect('mongodb://localhost/secret-santa');
var db = mongoose.connection;
// db.once('open', function(){
//     console.log("test");
// });

var testUser = User.create({
    email: 'test@test.com',
    password: 'test'
});

var userQuery = User.findOne({ email: 'test@test.com' });
userQuery.select('email password');
userQuery.exec(function(err, user){
    if(!err) {
        console.log(user.email);
    }
});
