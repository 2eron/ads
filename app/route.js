var express = require('express');
var router;
var logger = require('log4js').getLogger();
var walk = require('walk');
var files = [];

function registerRoute(app, routes, key){


    // 每个路由文件重新定义router
    router = express.Router();


    logger.info('Module: ' + key);
    Object.keys(routes).forEach(function (method) {
        var route = routes[method];
        var type = typeof route;
        if (type === 'object') {
            Object.keys(route).forEach(function (path) {
//                router[method].apply(router, [path, route[path]]);
                router[method](path, route[path]);
                logger.info(path + ' has registered.');
                //logger.debug('router.'+method+'("'+path+'",'+route[path].toString());
            });
        } else if (type === 'function') {
            logger.info('Function');
        }
    });
    key = key.replace('\\', '/');
    app.use(key, router);
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

    walker.on('errors', function(root, nodeStatsArray, next){
        nodeStatsArray.forEach(function (n) {
            console.error("[ERROR] " + n.name);
            console.error(n.error.message || (n.error.code + ": " + n.error.path));
        });
        next();
    });

    walker.on('end', function () {
        files.forEach(function(file){
            Object.keys(file).forEach(function(key){
                var routes = require('../' + file[key]);
                registerRoute(app, routes, key);
            });
        });

    });

}


exports.route = route;