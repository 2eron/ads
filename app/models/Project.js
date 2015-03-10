var mongo = require('mongoose');
var Schema = mongo.Schema;

var ProjectSchema = new Schema({
    _id: String,
    projectName: String
//    modules: [
//        {
//            type: Schema.ObjectId,
//            ref: 'Module'
//        }
//    ]
});

module.exports = mongo.model('Project', ProjectSchema);
