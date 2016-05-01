'use strict';

angular.module('encounterApp.main', [
  'ngRoute'
]);

angular.module('encounterApp.main').config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'resources/app/components/main/main.html',
    controller: 'MainController as vm'
  });
  
}]);