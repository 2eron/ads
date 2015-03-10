/**
 * @author xuw
 */
var hbs = require('hbs');
var extend = require('extend');
var walk = require('walk');
var logger = require('log4js').getLogger();
var fs = require('fs');
var path = require('path');

function loadPartials(dirname) {
    hbs.registerPartials('./views/partials');

//    var base = './views';
//    var walker = walk.walk(base);
//    walker.on('file', function(root, stat, next) {
//        var file = root + '/' + stat.name;
//        // Find files start with underscore, mark them as partials
//        if (/_.+/.test(stat.name)) {
//            var dir = path.relative(base, path.dirname(file));
//            var partial = dir.replace(/\\/g, '/') + '/' + path.basename(stat.name, path.extname(stat.name));
//
//            var loadPartial = function(file) {
//                fs.readFile(file, 'utf-8', function(err, data) {
//                    hbs.registerPartial(partial, data);
//                    logger.info('Partial ' + file + ' loaded.');
//                });
//            };
//            loadPartial(file);
//            fs.watch(file, function(){
//                logger.info('Partials file ' + file + ' changed, reloading...');
//                loadPartial(file);
//            })
//        }
//        next();
//    });
}

exports.init = function(dirname) {
    var helpers = {
        'keys': function(obj, block) {
            var out = '';
            if (obj && typeof obj === 'object') {
                Object.keys(obj).map(function(prop) {
                    out += block.fn({key: prop, value: obj[prop]});
                });
            }
            return out;
        },
        'map': function(obj, key) {
            return obj[key];
        },
        'foreach': function(arr, options) {
            if (options.inverse && (!arr || !arr.length)) {
                return options.inverse(this);
            }

            var ret = arr.map(function(item, index) {
                if (typeof item !== 'object') {
                    item = {
                        value: item
                    };
                }

                item.foreach = {
                    index: index,
                    count: index + 1,
                    hasNext: index < arr.length - 1,
                    first: index === 0,
                    last: index === arr.length - 1
                };

                return options.fn(item);
            }).join('');
            return ret;
        },
        'alt': function(primary, secondary, options) {
            return primary ? primary : secondary;
        }
    };

    var extenders = [
        require('./helpers/block')
    ];

    extenders.forEach(function(helper) {
        extend(helpers, helper);
    });

    Object.keys(helpers).forEach(function(key) {
        hbs.registerHelper(key, helpers[key]);
    });

    loadPartials(dirname);

    return hbs;
};
