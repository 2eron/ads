var mongo = require('mongoose');
var Schema = mongo.Schema;

var ModuleSchema = new Schema({
    name: String,
    project: {
        type: Schema.ObjectId,
        ref: 'Project'
    }
});

module.exports = mongo.model('Module', ModuleSchema);
