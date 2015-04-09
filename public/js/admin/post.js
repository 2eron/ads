require(['require', 'lib', 'knockout.validation.min'], function(require, lib){
    var $ = lib.jquery,
        ko = lib.ko;

    require('knockout.validation.min');

    ko.validation.init({
        insertMessages: false
    });

    var posts = [];

    $.ajax({
        type: 'get',
        url: '/api/post/',
        success: function(data){
            posts.push(data.name);
        }
    });

    var viewModel = {
        posts: ko.observableArray(posts),
        name: ko.observable(),
        addPost: function(){
            console.log(this.name());

            // submit data
            $.ajax({
                type: 'post',
                url: '/api/post/',
                data: {
                    name: this.name()
                },
                success: function(data){
                    //
                    var data = data;
                }
            })

        }
    }
    ko.applyBindings(viewModel);


});