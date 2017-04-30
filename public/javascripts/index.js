var app = angular.module('indexApp', ['ngRoute']);
app.controller('indexController', function ($scope, $http) {
    /*name of the varable that we get from db*/
    $http.get('index').then(function (response) {
        /*name of the varable that will be made in the scope e.x.*/
        $scope.x = response.data;
        console.log($scope.x);
    });
});
app.config(function($routeProvider){
    $routeProvider
    .when("/structures",{
        templateUrl:"../html/structures.htm",
        controller: "structuresController"
    });
});
app.controller("structuresController", function($scope){
    $scope.mine.level = "1";
});


