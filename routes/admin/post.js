var Post = require('../../app/models/Post');

var logger = require('log4js').getLogger();


module.exports = {
    get: {
        '/': function (req, res) {
            res.render('admin/post', {
                layout: 'layout/admin',
                data: {
                    title: '后台管理',
                    page: 'post'
                }
            });
        }
    }
}