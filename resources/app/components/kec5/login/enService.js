angular.module('encounterApp.kec5.login').factory('EnService', [
	'$http', '$q', 'path', 'UserService', function($http, $q, path, User) {

  	var url = path.baseUrl + 'kec5/login';

  	var enService = {};

	enService.getCode = function() {
		var deferred = $q.defer();

		var config = {
			headers: {
				'auth-username': User.username,
				'auth-password': User.password
			}
		};

		var code = $http.get(url, config);

		code.then(function (response) {
			deferred.resolve(response.data);
		});

		return deferred.promise;
	};

  	return enService;
}]);