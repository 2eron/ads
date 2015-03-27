var mongo = require('mongoose');
var Schema = mongo.Schema;

var ProjectSchema = new Schema({
    name: String
});

module.exports = mongo.model('Project', ProjectSchema);
