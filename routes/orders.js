var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var Order = mongoose.model('Order');

router.post('/createOrder',createOrder);
router.get('/listallOrders',listallOrders);




function createOrder(req,res){
           console.log(req.body);
	var order = new Order(req.body);
    order.save(function(err, order){
     	if(err){
        console.log("order not added");
        res.statusCode = 404;
     		}
     	if(order){
     	console.log("order added"+ order);
        res.send('order added');
             }
     });
}


function listallOrders(req,res){
  Order.find({}, function(err, orders){
    res.render('listOrders.html', {"orders" : orders});
  });
}


module.exports = router;
