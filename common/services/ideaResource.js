(function () {
    'use strict';

    angular.module("common.services").factory("ideaResource", ["$resource", ideaResource])

    function ideaResource($resource) {
        return $resource("/api/ideas/:ideaId");
    }
}());