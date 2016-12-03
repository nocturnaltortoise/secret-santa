var express = require('express');
var mongoose = require('mongoose');
var bcrypt = require('mongoose-bcrypt');
var User = require('../model/User.js');
var router = express.Router();

mongoose.connect('mongodb://localhost/secret-santa');
const db = mongoose.connection;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Secret Santa Organiser' });
});

router.get('/login', (req, res, next) => {
  res.send("Sign in page");
});

router.post('/login', (req, res, next) => {
  res.send("Verifying user details...");
});

router.get('/group/search', (req, res, next) => {
  res.render('group-search');
});

//Another route for the /group/search containing params here later...


router.get('/user/new', (req, res, next) => {
  res.render('user-new');
});

router.post('/user/create', (req, res, next) => {
  var params = req.body;
  // Create the user from supplied details
  var address = [];
  for (var i = 1; i <= 5; i++) {
    if (params["address"+i]) {
      address.push(params["address"+i]);
    }
  }
  console.log("The overall address: "+address.join(", "));
  var user = new User({
    email: params.email,
    password: params.password,
    likes: [params.likes],
    hates: [params.hates],
    address: address.join(", "),
    dietRequirements: [params.allergies]
  });

  user.save((err, user, numAffected) => {
    if (err) {
      console.error(err);
      res.redirect('/user/new');
    }
    else {
      console.log(numAffected+" user has been saved!");
      res.send("Received!");
    }
  });
});

module.exports = router;
