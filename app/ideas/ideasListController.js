/*global angular*/
(function() {
    'use strict';
    
    angular
        .module("ideaHackerApp")
        .controller("ideasListController", ["ideaResource", ideasListController]);
        
    function ideasListController(ideaResource) {
    
        var vm = this;
        
        ideaResource.query(function(data) {
            vm.ideas = data;
        });
        
        vm.message = "Wake up THUNDERTHIGHS";
    }
}());