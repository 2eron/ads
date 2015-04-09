var mongo = require('mongoose');
var Schema=mongo.Schema;

var GroupSchema=new Schema({
    name: String
});

module.exports = mongo.model('Group', GroupSchema);