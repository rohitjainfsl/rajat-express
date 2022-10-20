var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('support', { title: 'support Page' });
  });
  
  
  router.get('/add-new-ticket/', function(req, res, next) {
    res.render('support/addticket', { title: 'Add New ticket Page' });
  });


module.exports = router;