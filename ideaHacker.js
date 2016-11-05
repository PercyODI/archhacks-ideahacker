angular.module("ideaHackerApp", [])
    .controller("IdeaHackerController", function() {
        var ideaHacker = this;

        ideaHacker.name = "Pearse Hutson";
        ideaHacker.betterName = "HAYLEY";
        ideaHacker.number = 0;

        ideaHacker.getName = function() {
            return ideaHacker.name;
        }
        
        ideaHacker.supremeLeader = function(){
            return "BOW BEFORE THE ALMIGHTY QUEEN " + ideaHacker.betterName;
        }

        ideaHacker.addOne = function() {
            ideaHacker.number += 1;
        }
    })