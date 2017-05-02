
var app = angular.module('indexApp', ['ngRoute']);

// factories.factory('object', function () {
//     return {

//     };
// });

app.controller('indexController', function ($scope, $http) {
    // var req = {
    //     method: 'POST',
    //     url: 'http://localhost:3000/structures',
    //     headers: {
    //         'Content-Type': undefined
    //     },
    //     data: { structure: '$mine.attr("id")' }
    // }
    // $http(req).then(function(){}, function(){});
    /*name of the varable that we get from db*/
    $scope.upgStructure = function () {
        var data = { mine: "mine" };
        $http.post('http://localhost:3000/structures', data).then(function (response) {
            console.log(response);
            console.log(response.data.junktion);
        });
    }
    $http.post('http://localhost:3000/index').then(function (response) {
        /*name of the varable that will be made in the scope e.x.*/
        $scope.user = null;
        $scope.user = response.data;
        console.log($scope.user);
        console.log($scope.user[0]);
        console.log($scope.user[0].username);
        // $scope.upgradeMeleHealth = function () {
        //     var data = "melee_health";
        //     $http.post('http//localhost:3000', data).then(
        //         function (response) {

        //         }, function (response) {

        //         });
        // };
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
        .when("/research", {
            templateUrl: "../html/research.htm",
            controller: "researchController"
        })
        .when("/training/meleTraining", {
            templateUrl: "../html/trainingMele.htm",
            // templateUrl:"../html/meleTraining.htm",
            controller: "trainingController"
        })
        .when("/training/rangeTraining", {
            templateUrl: "../html/trainingRange.htm",
            // templateUrl:"../html/meleTraining.htm",
            controller: "trainingController"
        })
        .when("/training/machineTraining", {
            templateUrl: "../html/trainingMachines.htm",
            // templateUrl:"../html/meleTraining.htm",
            controller: "trainingController"
        })
        .when("/research/meleResearch", {
            templateUrl: "../html/meleResearch.htm",
            controller: "researchController"
        })
        .when("/research/rangeResearch", {
            templateUrl: "../html/rangeResearch.htm",
            controller: "researchController"
        })
        .when("/research/machineResearch", {
            templateUrl: "../html/machineResearch.htm",
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
app.controller("researchController", function ($scope) {
    $scope.mine = {};
    $scope.mine.level = "1";
});