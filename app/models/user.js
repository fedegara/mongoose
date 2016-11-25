var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String, required: true, unique: true},
    age: {type: Number, required: true}
});
//TYPES
/*
 String
 Date
 Number
 Boolean
 Array
 Mixed
 */

module.exports = mongoose.model("user", userSchema);