'use strict';

angular.module('myApp.events', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/events', {
            templateUrl: 'events/events.html',
            controller: 'EventsCtrl'
        });
    }])

    .controller('EventsCtrl', ['$scope', '$http', function ($scope, $httpClient) {
        console.log('Events controller at work')

        $httpClient.get("http://localhost:8083/api/v1/rest/Events/events").then(function (response) {
            console.log(response);


            $scope.arrRec = response.data;
            console.log($scope.arrRec);

            $scope.table.name = "1";
            $scope.title = "2";
            $scope.date = "3";
            $scope.street = "4";
            $scope.city = "5";
            $scope.price = "6";
            $scope.maxVisitors = "7";
            $scope.duration = "8";
            $scope.link = "9";
            $scope.email = "10";
            $scope.phone = "11";

        }).catch(function (error) {
            console.log(error);
        });
    }]);
