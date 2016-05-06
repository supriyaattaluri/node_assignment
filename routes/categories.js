var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Category = mongoose.model('Category');


router.post('/createcategory',createCategory);
router.post('/editcategory',editCategory);
router.get('/listallcategory', listCategory);
router.get('/addcategory', addCategory);
//router.get('/delete/:id',deleteCategory);



 function addCategory(req, res) {

    res.render('categoryAddnew.html');
}
router.get('/deletecategory', function(req, res) {

});



function createCategory(req,res){
	var category = new Category(req.body);
    category.save(function(err, category){
     	if(err){
        console.log("category not inserted");
        res.statusCode = 404;
     		}
     	if(category){
     		 console.log("category created"+ category);
     		res.redirect('/categories/listallcategory');
			        
             }
     });
}


function listCategory(req,res)
{
Category.find({}, function(err, categories){
    res.render('listCategories.html', {"categories" : categories});
  });
}


router.get('/edit/:id',editfeature);


function editfeature(req, res){

    if(req.query.update!= undefined){
        console.log(req.query);
       if(req.query.update == 'update'){
         Category.update({_id:req.params.id}, {$set:{Name:req.query.Name,
            Info :req.query.Info,
            isbnnumber :req.query.isbnnumber,
            Category :req.query.Category,
            ParentCategory :req.query.ParentCategory,
            Active :"True" }}, {w:1}, function(err, result) {
              if(err){
                console.log(err.stack);
              }
              res.redirect('/categories/listallcategory');
            });
        } 
    }else{
        Feature.findOne({"_id":req.params.id},function(err, feature){
        if(err){
            res.render({"msg" : "Something went wrong"});
        }
        res.render('categoryEdit.html', {"feature": feature});
        });
    }

}

function editCategory(req,res){

     Category.update({_id:req.params.id}, {$set:{Name:req.body.Name,
     	    Info :req.body.Info,
            isbnnumber :req.body.isbnnumber,
            Category :req.body.Category,
            ParentCategory :req.body.ParentCategory,
            Active : req.body.Active
           }}, {w:1}, function(err, result) {
              if(err){
                console.log(err.stack);
              }
              res.json({ message: 'category updated!' });
            });
}



module.exports = router;
