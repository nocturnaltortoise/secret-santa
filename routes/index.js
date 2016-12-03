var express = require('express');
var mongoose = require('mongoose');
var bcrypt = require('mongoose-bcrypt');
var User = require('../model/User.js');
var router = express.Router();

mongoose.connect('mongodb://localhost/secret-santa');
const db = mongoose.connection;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user/new', (req, res, next) => {
  res.render('user-new');
});

router.post('/user/create', (req, res, next) => {
  //req.body.<field_name>
  var params = req.body;
  // Create the user from supplied details
  var user = new User({
    email: 'test@test.com',
    password: 'test',
    likes: [params.likes],
    hates: [params.hates],
    address: params.address1+", "+params["address2"],
    dietRequirements: [params.allergies]
  });

  user.save((err, user, numAffected) => {
    if (err) {
      console.error(err);
    }
    console.log(numAffected+" user has been saved!");
    res.send("Received!");
  });
});

module.exports = router;
