require(['require', 'lib', 'knockout.validation.min'], function (require, lib) {
    var $ = lib.jquery,
        ko = lib.ko;

    require('knockout.validation.min');

    ko.validation.init({
        registerExtenders: true,
        messagesOnModified: true,
        insertMessages: false
    });

    var posts = [];

    $.ajax({
        type: 'get',
        url: '/api/post/',
        success: function (data) {
            viewModel.posts(data);
        }
    });

    var viewModel = {
        isEdit: ko.observable(false),
        editID: ko.observable(),
        posts: ko.observableArray(posts),
        name: ko.observable().extend({
            required: {
                message: '请输入岗位名称！'
            }
        }),
        submit: function () {
            console.log(viewModel.errors())
            if (viewModel.errors().length == 0) {
                if (viewModel.isEdit()) {
                    $.ajax({
                        type: 'put',
                        url: '/api/post/' + viewModel.editID(),
                        data: {
                            name: viewModel.name
                        },
                        success: function (data) {
                            viewModel.posts(data);
                            viewModel.isEdit(false);
                            viewModel.name('');
                        }
                    });
                } else {
                    // submit data
                    $.ajax({
                        type: 'post',
                        url: '/api/post/',
                        data: {
                            name: this.name()
                        },
                        success: function (data) {
                            viewModel.posts(data);
                        }
                    });
                }
            }else{
                viewModel.errors.showAllMessages();
            }

        },
        edit: function () {
            viewModel.isEdit(true);
            viewModel.editID(this._id);
            viewModel.name(this.name);
        },
        delete: function () {
            $.ajax({
                type: 'post',
                url: '/api/post/' + this._id,
                success: function (data) {
                    viewModel.posts(data);
                }
            });
        }
    };

    viewModel.errors = ko.validation.group(viewModel);

    ko.applyBindings(viewModel);


});