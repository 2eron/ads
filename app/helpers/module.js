var hbs = require('hbs');


/**
 * js
 */

module.exports = {
    'script': function (src, options) {
        console.log(src);
        return new hbs.SafeString(
            '<script type="text/javascript" src="' + src + '"></script>'
        );
    }
}