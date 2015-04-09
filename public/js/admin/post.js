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
            //
        }
    });

    var viewModel = {
        posts: ko.observableArray(posts),
        name: ko.observable(),
        addPost: function(){
            console.log(this.name());

            // submit data

        }
    }
    ko.applyBindings(viewModel);


});