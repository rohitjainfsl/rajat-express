var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('products', { title: 'Products Page' });
});

router.get('/add-new-product/', function(req, res, next) {
  res.render('products/deleteproduct', { title: 'Add New Product Page' });
});

router.get('/categories/', function(req, res, next) {
  res.render('products/categories', { title: 'Product Categories Page' });
});

router.get('/sub-categories/', function(req, res, next) {
  res.render('products/subcategories', { title: 'Product Subcategory Page' });
});



module.exports = router;
