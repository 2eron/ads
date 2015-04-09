var User = require('../../app/models/User');
var logger = require('log4js').getLogger();


module.exports = {
    post: {
        '/users': function (req, res) {
            var user = new User();
            user.name = req.body.name;
            user.workNumber = req.body.workNumber;
            user.email = req.body.email;
            user.password = 'abiz';
            user.post = req.body.post.split(',');
            user.role = req.body.role;
            user.state = 1;

            user.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 1 });
            })
        }
    }
}