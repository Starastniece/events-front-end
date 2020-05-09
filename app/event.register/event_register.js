'use strict';

angular.module('myApp.eventRegister', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/event_register', {
            templateUrl: 'event.register/event_register.html',
            controller: 'EventRegisterCtrl'
        });
    }])

    .controller('EventRegisterCtrl', ['$scope', '$http', function ($scope, $httpClient) {
        console.log('Event register controller at work')

        $scope.submit = function () {
            var eventDTO = {
                title: $scope.title,
                date: $scope.date,
                street: $scope.street,
                city: $scope.city,
                price: $scope.price,
                visitors: $scope.visitors,
                duration: $scope.duration,
                link: $scope.link,
                email: $scope.email,
                phone: $scope.phone,

            };

            var eventCreateRequestDTO = {
                event_dto: eventDTO,
            };


            var submitData = JSON.stringify(eventCreateRequestDTO);
            console.log(eventCreateRequestDTO);
            $httpClient.post("http://localhost:8083/api/v1/rest/Events/createEvent", submitData).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }

    }]);


