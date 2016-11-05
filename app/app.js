/*global angular*/
(function() {
    'use strict';

    var app = angular.module("ideaHackerApp", [
        "common.services",
        "ui.router",
        "ideaResourceMock"
    ]);

    app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "app/home.html"
            })
            .state("ideasList", {
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
                        return ideaResource.get({
                            ideaId: ideaId
                        }).$promise;
                    }
                }
            })
            .state("ideaEdit", {
                url: "/ideas/edit/:ideaId",
                templateUrl: "app/ideas/ideaEditView.html",
                controller: "ideaEditController as vm",
                resolve: {
                    ideaResource: "ideaResource",

                    idea: function(ideaResource, $stateParams) {
                        var ideaId = $stateParams.ideaId;
                        return ideaResource.get({
                            ideaId: ideaId
                        }).$promise;
                    }
                }
            })
            // User States
            .state("userLogin", {
                url: "/users/login",
                templateUrl: "app/users/userLogin.html",
                controller: "userLoginController as vm"
            })
    }])
}());
