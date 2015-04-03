require(['lib'], function(lib){
    var $ = lib.jquery, ko = lib.ko;

    var ViewModel = function(first, last){
        this.firstName = ko.observable(first);
        this.lastName = ko.observable(last);
    }

    ko.applyBindings(new ViewModel());

});