var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

router.get('/about/', function(req, res, next) {
  res.render('about', { title: 'About Page' });
});

router.get('/attributes/', function(req, res, next) {
  res.render('attributes', { title: 'Attributes Page' });
});

router.get('/orderLog/', function(req, res, next) {
  res.render('orderLog', { title: 'Order Log Page' });
});

router.get('/vender/', function(req, res, next) {
  res.render('vender', { title: 'vender  Page' });
});


router.get('/faq/', function(req, res, next) {
  res.render('faq', { title: 'faq  Page' });
});

router.get('/blog/', function(req, res, next) {
  res.render('blog', { title: 'faq  Page' });
});





module.exports = router;
