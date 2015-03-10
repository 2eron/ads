var router = require('express').Router();

function route(app) {
    var routes = require('../routes/demo/index');

    Object.keys(routes).forEach(function (method) {
        var route = routes[method];
        var type = typeof route;

        if (type === 'object') {
            Object.keys(route).forEach(function (path) {
//                router[method].apply(router, [path, route[path]]);
                router[method](path, route[path]);
            });
        } else if (type === 'function') {

        }

    });

    app.use(router);


}

exports.route = route;