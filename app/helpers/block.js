var hbs = require('hbs');
var blocks = {};

/**
 * 布局模块
 */
module.exports = {
    'block': function(name) {
        var val = (blocks[name] || []).join('\n');
        // clear the block
        delete blocks[name];
//        console.log('block');
//        console.log(blocks);
        return val;
    },
    'extend': function(name, context) {
        var block = blocks[name];
        if (!block) {
            block = blocks[name] = [];
        }
//        console.log(blocks[name]);
        block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
//        console.log('extend');
//        console.log(blocks);
    }
};
