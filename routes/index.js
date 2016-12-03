var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user/create', (req, res, next) => {
  res.render('user-input');
});

router.post('/user/new', (req, res, next) => {
  console.log(res);
});

module.exports = router;
