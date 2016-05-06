var express=require('express');
var bodyparser=require('body-parser');

var app=express();

var path =  require("path");
var cons = require('consolidate');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
require('./model/product')(mongoose);
require('./model/category')(mongoose);
require('./model/feature')(mongoose);
require('./model/order')(mongoose);
mongoose.connect('mongodb://localhost:27017/ecommdb');

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
  app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
        res.render("productAddnew.html");
});

app.get('/category', function(req,res){
        res.render("categoryAddnew.html");
});

app.get('/feature', function(req,res){
  res.render("featureAddnew.html");
})

var products= require('./routes/products');
app.use('/products' , products);

var categories=require('./routes/categories');
app.use('/categories', categories);

var features=require('./routes/features');
app.use('/features',features);


var orders=require('./routes/orders');
app.use('/orders',orders);


app.listen(2016);
console.log("running at 2016");   