var mongo = require('mongoose');
var schema = mongo.Schema;

var UserSchema=new Schema({
    userName: String,
    userNumber: String,
    userEmail: String,
    userPassword: String,
    userGroup: {}
});