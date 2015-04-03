var hbs = require('hbs');


/**
 * js
 */

module.exports = {
    'script': function (src) {
        return new hbs.SafeString(
            '<script type="text/javascript" src="' + src + '"></script>'
        );
    },
    'module': function(src){
        var path = '/js/app/';
        return new hbs.SafeString(
            '<script type="text/javascript"> var require = {"baseUrl": "/js/lib"};</script>' +
            '<script type="text/javascript" src="' + '/js/lib/require.min.js" ' +
            'data-main="' + path + src + '.js"></script>'
        );
    }
}