var mongo = require('mongoose');
var Schema = mongo.Schema;

var UserSchema = new Schema({
    name: String,
    workNumber: String,
    email: String,
    password: String,
    post: [Schema.ObjectId],
    role: String,
    state: {
        type: Number,
        default: 1
    }
});

module.exports = mongo.model('User', UserSchema);