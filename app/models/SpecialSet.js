var mongo = require('mongoose');
var Schema = mongo.Schema;

var SpecialSetSchema = new Schema({
    year: String,
    month: String,
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
});

module.exports = mongo.model('SpecialSet', SpecialSetSchema);