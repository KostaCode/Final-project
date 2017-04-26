var app = angular.module('indexApp', []);
app.controller('indexController', function ($scope, $http) {
    /*name of the varable that we get from db*/
    $http.get('index').then(function (response) {
        /*name of the varable that will be made in the scope e.x.*/
        $scope.x = response.data;
        console.log($scope.x);
    });
});

