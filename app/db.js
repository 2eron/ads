var mongoose = require('mongoose');
var logger=require('log4js').getLogger();

var connect = function () {
    mongoose.connect('mongodb://zeron:zeron@127.0.0.1:8099/ads');
    var conn = mongoose.connection;
    conn.on('error', function(err){
        logger.error('Connection Error: ' + err);
    });
    conn.once('open', function () {
        logger.info('Connected to database ads.');
    });
}

exports.connect = connect;

