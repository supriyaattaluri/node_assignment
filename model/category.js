module.exports = function(mongoose) {
    "use strict";
    //console.log(mongoose);
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var category = new Schema({
            
            Name :String,
            Info :String,
            Category:String,
            ParentCategory:String,
            Active :Boolean

    });

    var Category = mongoose.model('Category', category);
    return Category;
};