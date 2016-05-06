
module.exports = function(mongoose) {
    "use strict";
    //console.log(mongoose);
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var relationship = require("mongoose-relationship");

    var category_product = new Schema({
        Productid: Number,
        Categoryid: Number
});

    var Category_product = mongoose.model('Category_product', category_product);
    return Category_product;
};