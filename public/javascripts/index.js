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
});
app.controller("structuresController", function ($scope) {
    // mine && mine.level will be resived from the db
    $scope.mine = {};
    $scope.mine.level = "1";
});
// army controllers
app.controller("armyController", function ($scope) {
    // mine && mine.level will be resived from the db
    $scope.mine = {};
    $scope.mine.level = "1";
});
