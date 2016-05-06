module.exports = function(mongoose) {
    "use strict";
    //console.log(mongoose);
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var brand = new Schema({
            
            Name :String,
            Info :String,
            Image :String,
            Active :Boolean

    });

    var Brand = mongoose.model('Brand', brand);
    return Brand;
};