var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var Product = mongoose.model('Product');

router.post('/add',addProduct);
router.get('/listall',showAllProducts);



function addProduct(req,res){
	var product = new Product(req.body);
    product.save(function(err, product){
     	if(err){
        console.log("product not inserted");
        res.statusCode = 404;
     		}
     	if(product){
     	console.log("record created"+ product);
        res.redirect('/products/listall')
       
             }
     });
}


function showAllProducts(req,res){
  Product.find({}, function(err, products){
    res.render('listProducts.html', {"products" : products});
  });
}

module.exports = router;
