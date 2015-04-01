var hbs = require('hbs');


/**
 * js
 */

module.exports = {
    'script': function (src) {
        return new hbs.SafeString(
            '<script type="text/javascript" src="' + src + '"></script>'
        );
    }
}