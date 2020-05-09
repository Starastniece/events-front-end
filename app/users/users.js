'use strict';

angular.module('myApp.users', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/users', {
            templateUrl: 'users/users.html',
            controller: 'UsersCtrl'
        });
    }])

    .controller('UsersCtrl', ['$scope', '$http', function ($scope, $httpClient) {
        console.log('Users controller at work')

        $httpClient.get("http://localhost:8083/api/v1/rest/User/users").then(function (response) {
            console.log(response);


            $scope.arrRec = response.data;
            console.log($scope.arrRec);
//nomaini tabulas parametrus
            $scope.table.name = "1";
            $scope.surname = "2";
            $scope.email = "3";
            // $scope.phone = "4";
            $scope.username = "5";
            $scope.status = "6";


        }).catch(function (error) {
            console.log(error);
        });
    }]);
