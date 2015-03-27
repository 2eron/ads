var mongo = require('mongoose');
var Schema = mongo.Schema;

var MailSetSchema = new Schema({
    name: String,
    project: {
        type: Schema.ObjectId,
        ref: 'Project'
    },
    createDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongo.model('MailSet', MailSetSchema);