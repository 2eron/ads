var Project = require('../../app/models/Project');
var Module = require('../../app/models/Module');
var logger = require('log4js').getLogger();


module.exports = {
    get: {
        '/': function (req, res) {
            var users = [
                {
                    name: '李伟',
                    workNumber: '1474',
                    email: 'liw@made-in-china.com',
                    group: '前端',
                    role: '管理员',
                    state: 1
                }
            ]
            res.render('admin/index', {
                layout: 'layout/admin',
                data: {
                    title: '后台管理',
                    users: users
                }
            });
        }
    }
}