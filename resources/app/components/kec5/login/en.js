'use strict';

angular.module('encounterApp.kec5.login', [
  'ngRoute'
]);

angular.module('encounterApp.kec5.login').config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/kec5/login', {
    templateUrl: 'resources/app/components/kec5/login/en.html',
    controller: 'EnController as en'
  });
  
}]);