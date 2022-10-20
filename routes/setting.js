var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('setting', { title: 'Users Page' });
});

router.get('/privacy/', function(req, res, next) {
  res.render('setting/privacy', { title: 'Privacy Policy Page' });
});

router.get('/tags/', function(req, res, next) {
  res.render('setting/tags', { title: 'Privacy Policy Page' });
});
router.get('/shipping/', function(req, res, next) {
  res.render('setting/shipping', { title: 'Privacy Policy Page' });
});

module.exports = router;