'use strict';

angular.module('encounterApp.kec5.colors', [
  'ngRoute'
]);

angular.module('encounterApp.kec5.colors').config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/kec5/colors', {
    templateUrl: 'resources/app/components/kec5/colors/colors.html',
    controller: 'ColorsController as vm'
  });
  
}]);