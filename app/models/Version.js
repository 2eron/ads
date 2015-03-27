var mongo = require('mongoose');
var Schema = mongo.Schema;

var VersionSchema = new Schema({
    number: String,
    title: String,
    year: String,
    project: {
        type: Schema.ObjectId,
        ref: 'Project'
    },
    state: {
        type: Number,
        default: 0
    },
    createDate: {
        type: Date,
        default: Date.now()
    }
})