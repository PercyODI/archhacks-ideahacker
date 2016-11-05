/*global angular*/
(function() {
    'use strict';
    
    angular
        .module("ideaHackerApp")
        .controller("ideaDetailController", ["idea", ideaDetailController]);
        
    function ideaDetailController(idea) {
    
        var vm = this;
        
        console.dir(idea);
        vm.idea = idea;
        vm.title = "Idea Detail: " + vm.idea.name;
        
        vm.idea.skillsNeeded = vm.idea.skillsNeeded ? vm.idea.skillsNeeded.toString() : "No Skills Listed";
        
        
    }
}());