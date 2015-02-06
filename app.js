/**
 * Module dependencies
 */


var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

var port = process.env.PORT || 3001;

/**
 * setting
 */
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/**
 * middleware
 */
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon('./public/img/favicon.png'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

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
    console.log(morgan);
});


