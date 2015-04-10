var mongo = require('mongoose');
var Schema=mongo.Schema;

var PostSchema=new Schema({
    name: String
});

module.exports = mongo.model('Post', PostSchema);