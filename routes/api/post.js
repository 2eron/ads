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
    },
    post: {
        '/': function(req, res){
            var post = new Post();
            post.name = req.body.name;

            post.save(function(err){
                if(err){
                    res.send(err);
                }else{
                    Post.find(function(err, posts){
                        if(err){
                            res.send(err);
                        }
                        res.json(posts);
                    });
                }
            });
        }
    }
}