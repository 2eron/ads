require(['require', 'lib', 'knockout.validation.min'], function(require, lib){
    var $ = lib.jquery,
        ko = lib.ko;

    require('knockout.validation.min');

    ko.validation.init({
        insertMessages: false
    });
    console.log(ko.validation.rules);


    var viewModel = {
        name: ko.observable().extend({
            required: {
                message: '请输入姓名！'
            }
        }),
        workNumber: ko.observable(),
        email: ko.observable(),
        post: ko.observableArray([]),
        role: ko.observable(),
        roleOptions: ['管理员', '普通用户'],

        submit: function(){
            console.log('click');
            console.log(this.role());
            //alert(this.name());
            if(viewModel.errors().length > 0){
                viewModel.errors.showAllMessages();
            }
        }
    };

    viewModel.errors = ko.validation.group(viewModel);

    ko.applyBindings(viewModel);

});