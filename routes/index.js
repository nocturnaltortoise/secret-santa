var express = require('express');
var mongoose = require('mongoose');
var bcrypt = require('mongoose-bcrypt');
var User = require('../model/User.js');
var Group = require('../model/Group.js');
var router = express.Router();
var users = require('./users')(router);
var groups = require('./groups')(router);

mongoose.connect('mongodb://localhost/secret-santa');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Secret Santa Organiser' });
});

module.exports = router;
