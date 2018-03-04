var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express1' });
});

router.get('/kk2', function(req, res, next) {
  res.render('kview1', { title: 'ks' });
});

router.get('/kk', function(req, res, next) {
  res.render('index', { title: 'ks' });
});

router.get('/kb1', function(req, res, next) {
  res.render('kview2', { title: 'ks' });
});


module.exports = router;
