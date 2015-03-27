var mongo = require('mongoose');
var Schema = mongo.Schema;

var DesignSchema = new Schema({
    title: String,
    thumbRoot: String,
    originRoot: String,
    task: {
        type: Schema.ObjectId,
        ref: 'Task'
    }
});

module.exports = mongo.model('Design', DesignSchema);