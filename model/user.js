
module.exports = function(mongoose) {
    "use strict";
    //console.log(mongoose);
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var relationship = require("mongoose-relationship");

    var user = new Schema({
        Name :{type :String,required :true}
        Pwd:{type :String,required :true},
        Email:{type :String,required :true},
        Phone :{type :Number,required :true},
       Addresses:[{ type:Schema.ObjectId, ref:"Addressinfo" }]

});

    var User = mongoose.model('User', user);
    return User;
};