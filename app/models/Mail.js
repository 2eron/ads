var mongo = require('mongoose');
var Schema = mongo.Schema;

var MailSchema = new Schema({
    title: String,
    thumbRoot: String,
    originRoot: String,
    mailSet: {
        type: Schema.ObjectId,
        ref: 'MailSet'
    },
    createDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongo.model('Mail', MailSchema);