var mongo = require('mongoose');
var Schema = mongo.Schema;

var SpecialSchema = new Schema({
    title: String,
    thumbRoot: String,
    originRoot: String,
    psdRoot: String,
    link: String,
    specialSate: {
        type: Schema.ObjectId,
        ref: 'SpecialSet'
    },
    completeDate: Date,
    createDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongo.model('Special', SpecialSchema);