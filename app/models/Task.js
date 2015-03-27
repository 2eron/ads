var mongo = require('mongoose');
var Schema = mongo.Schema;

var TaskSchema = new Schema({
    title: String,
    IDTitle: String,
    IDUrl: String,
    completeDate: Date,
    state: {
        type: Number,
        default: 0
    },
    module: {
        type: Schema.ObjectId,
        ref: 'Module'
    },
    version: {
        type: Schema.ObjectId,
        ref: 'Version'
    },
    createDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongo.model('Task', TaskSchema);