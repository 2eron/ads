var Post = require('../../app/models/Post');

function getPosts(res){
    Post.find(function(err, posts){
        if(err){
            res.send('err');
        }
        res.json(posts);
    });
}

module.exports = {
    get: {
        '/': function(req, res){
            getPosts(res);
        }
    },
    post: {
        '/': function(req, res){
            var post = new Post();
            post.name = req.body.name;

            post.save(function(err){
                if(err){
                    res.send(err);
                }
                getPosts(res);
            });
        },
        '/:postId': function(req, res){
            var postId = req.params.postId;
            Post.remove({
                _id: postId
            }, function(err){
                if(err){
                    res.send(err);
                }
                getPosts(res);
            });
        }
    },
    put: {
        '/:postId': function(req, res){
            var postId = req.params.postId;
            Post.update({
                _id: postId
            }, {
                $set: {
                    name: req.body.name
                }
            }, function(err){
                if(err){
                    res.send(err);
                }
                getPosts(res);
            });
        }
    }
}