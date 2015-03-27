var router = require('express').Router();
var logger = require('log4js').getLogger();
var walk = require('walk');
var files = [];

function registerRoute(app, routes, key){
    //routes = require('../routes/demo/index');
    logger.info(routes);
    Object.keys(routes).forEach(function (method) {
        var route = routes[method];
        var type = typeof route;

        if (type === 'object') {
            Object.keys(route).forEach(function (path) {
//                router[method].apply(router, [path, route[path]]);
                router[method](path, route[path]);
                logger.debug(path);
            });
        } else if (type === 'function') {

        }
    });
    //logger.info('Key:' + key.replace('\\', '/'));
    app.use('/', router);
}


function route(app) {

    var base = 'routes';
    var walker = walk.walk(base, { followLinks: false });

    walker.on('file', function (root, stat, next) {
        // Add this file to the list of files
        var endpointGroup = stat.name.match(/(.+)\.js$/);
        var parentGroup = root.match(new RegExp(base + '(.*)'));
        if (endpointGroup && endpointGroup.length > 0 && parentGroup.length > 0) {
            var endpoint = endpointGroup[1] === 'index' ? '' : endpointGroup[1];
            var parent = parentGroup[1];

            var obj = {};

            if (!parent) {
                parent = '/';
            }
            obj[parent + (endpoint ? '/' + endpoint : '')] = root + '/' + endpoint;
            files.push(obj);
        }

        next();
    });

    walker.on('end', function () {
        files.forEach(function(file){
            Object.keys(file).forEach(function(key){
                var routes = require('../' + file[key]);
                if(routes){
                    registerRoute(app, routes, key);
                }else{
                    logger.warn('No routes found.');
                }
            });
        });
    });

}


exports.route = route;