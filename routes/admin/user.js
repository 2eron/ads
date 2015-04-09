var logger = require('log4js').getLogger();


module.exports = {
    get: {
        '/': function (req, res) {
            res.render('admin/user', {
                layout: 'layout/admin',
                data: {
                    page: 'user',
                    title: '后台管理'
                }
            });
        }
    }
}