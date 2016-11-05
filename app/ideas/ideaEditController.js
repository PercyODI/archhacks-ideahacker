(function() {
    'use strict';

    angular
        .module("ideaHackerApp")
        .controller("ideaEditController", [
            "idea",
            "$state",
            ideaEditController
        ]);

    function ideaEditController(idea, $state) {
        console.dir(idea);
        var vm = this;
        vm.idea = idea;

        if (vm.idea && vm.idea.ideaId) {
            vm.title = "Edit: " + vm.idea.name;
        }
        else {
            vm.title = "New Idea";
        }

        vm.submit = function() {
            vm.idea.$save(function(data) {
                toastr.success("Save Successful");
                $state.go('ideasList');
            })
        }
        
        vm.cancel = function() {
            $state.go('ideasList');
        }
    }
}());
