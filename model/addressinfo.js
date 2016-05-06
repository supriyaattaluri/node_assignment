
module.exports = function(mongoose) {
    "use strict";
    //console.log(mongoose);
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var relationship = require("mongoose-relationship");

    var addressinfo = new Schema({
        Userid :String,
        Address: String
        User: { type:Schema.ObjectId, ref:"User", addresses:"children" }
});

    var Addressinfo = mongoose.model('Addressinfo', addressinfo);
    return Addressinfo;
};