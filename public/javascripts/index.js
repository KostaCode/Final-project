var app = angular.module('indexApp', ['ngRoute']);
app.controller('indexController', function ($scope, $http) {
    /*name of the varable that we get from db*/
    $http.get('index').then(function (response) {
        /*name of the varable that will be made in the scope e.x.*/
        $scope.x = response.data;
        console.log($scope.x);
    });
});
// structures config and controllers
app.config(function ($routeProvider) {
    $routeProvider
        .when("/structures", {
            templateUrl: "../html/structures.htm",
            controller: "structuresController"
        })
        .when("/army", {
            templateUrl: "../html/army.htm",
            controller: "armyController"
        })
        .when("/training", {
            templateUrl: "../html/training.htm",
            controller: "trainingController"
        })
        .when("/research",{
            templateUrl: "../html/research.htm",
            controller: "researchController"
        })
        .when("/training/meleTraining",{
            templateUrl: "../html/training.htm",
            // templateUrl:"../html/meleTraining.htm",
            controller: "trainingController"
        })
        .when("/training/rangeTraining",{
            templateUrl: "../html/training.htm",
            // templateUrl:"../html/meleTraining.htm",
            controller: "trainingController"
        })
        .when("/training/machineTraining",{
            templateUrl: "../html/training.htm",
            // templateUrl:"../html/meleTraining.htm",
            controller: "trainingController"
        })
        .when("/research/meleResearch",{
            templateUrl: "../html/research.htm",
            controller: "researchController"
        })
        .when("/research/rangeResearch",{
            templateUrl: "../html/research.htm",
            controller: "researchController"
        })
        .when("/research/machineResearch",{
            templateUrl: "../html/research.htm",
            controller: "researchController"
        })
});
app.controller("structuresController", function ($scope) {
    // mine && mine.level will be resived from the db
    $scope.mine = {};
    $scope.mine.level = "1";
});
// army controllers
app.controller("armyController", function ($scope) {
    $scope.mine = {};
    $scope.mine.level = "1";
});
// training controller
app.controller("trainingController", function ($scope) {
    $scope.mine = {};
    $scope.mine.level = "1";
});
app.controller("researchController", function($scope){
    $scope.mine = {};
    $scope.mine.level = "1";
});