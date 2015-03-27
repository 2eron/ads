var mongo = require('mongoose');
var Schema = mongo.Schema;

var UserSchema = new Schema({
    name: String,
    workNumber: String,
    email: String,
    password: String,
    group: Array,
    role: String
});

module.exports = mongo.model('User', UserSchema);