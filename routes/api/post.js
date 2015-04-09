var Post = require('../../app/models/Post');

module.exports = {
    get: {
        '/': function(req, res){
            Post.find(function(err, posts){
                if(err){
                    res.send(err);
                }
                res.json(posts);
            });
        }
    }
}