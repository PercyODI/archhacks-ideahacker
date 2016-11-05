/*global angular*/
(function () {
    'use strict';
    
    var app = angular.module("ideaHackerApp", 
    [
        "common.services", 
        "ui.router", 
        "ideaResourceMock"
    ]);
    
    app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/ideas");
        
        $stateProvider
            .state("ideaList", {
                url: "/ideas",
                templateUrl: "app/ideas/ideasListView.html",
                controller: "ideasListController as vm"
            })
            .state("ideaDetail", {
                url: "/ideas/:ideaId",
                templateUrl: "app/ideas/ideaDetailView.html",
                controller: "ideaDetailController as vm",
                resolve: {
                    ideaResource: "ideaResource",
                    
                    idea: function(ideaResource, $stateParams) {
                        var ideaId = $stateParams.ideaId;
                        return ideaResource.get({ideaId: ideaId}).$promise;
                    }
                }
            })
    }])
}());