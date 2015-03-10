var mongo = require('mongoose');
var Schema = mongo.Schema;

var ModuleSchema = new Schema({
    moduleName: String,
    project: {
        type: Schema.ObjectId,
        ref: 'Project'
    }
});

module.exports = mongo.model('Module', ModuleSchema);
