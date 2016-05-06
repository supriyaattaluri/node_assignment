module.exports = function(mongoose) {
    "use strict";
    //console.log(mongoose);
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var coupon = new Schema({
            
            Code :String,
            Amount :Number,
            MinimumCartValue:Number,
            Info:String,
            Type:String,
            Active:Boolean

    });

    var Coupon = mongoose.model('Coupon', coupon);
    return Coupon;
};