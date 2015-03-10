/**
 * Module dependencies
 */


var express = require('express');
var app = express();
var path = require('path');
var hbs = require('./app/hbs-support');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var log4js = require('log4js');
var logger = log4js.getLogger();
var config = require('./config.json');
var db = require('./app/db');

//var demoRoute = require('./routes/demo/index');
var route = require('./app/route');

var port = process.env.PORT || config.port;

db.connect();

hbs.init(__dirname);
/**
 * setting
 */
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/**
 * middleware
 */
app.use(favicon('./public/img/favicon.png'));
app.use(log4js.connectLogger(log4js.getLogger('access'), {
    level: log4js.levels.INFO,
    format: ':remote-addr ":method :url HTTP/:http-version" :status :content-length ":referrer" :response-time'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

var staticPath = config.devMode ? "public" : "dist";
app.use(express.static(path.join(__dirname, staticPath)));

/**
 * routes
 */
route.route(app);

/**
 * error
 */

app.use(function (req, res, next) {
    var err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        error: err
    });
});

/**
 * server
 */
app.listen(port, function () {
    logger.info('Server unit ' + process.pid + ' listening on port ' + port);
});


