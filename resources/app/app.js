'use strict';

angular.module('encounterApp', [
	'encounterApp.main',
	'encounterApp.kec5',
	'ngRoute']);

angular.module('encounterApp').config(function($httpProvider, $routeProvider, $locationProvider, pathProvider) {

	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common["X-Requested-With"];

	$routeProvider.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode(true);

	pathProvider.setBaseUrl('http://localhost/encounter/api/v1/');
});