(function() {
  'use strict';

  angular
    .module('encounterApp.kec5.login')
    .controller('EnController', enController);

  enController.$inject = [
    'EnService',
    'UserService'];

  function enController(En, User) {

    var vm = this;
    vm.enService = En;
    vm.userService = User;

    vm.code = '';
    vm.success = false;

    vm.x = 0;
    vm.y = 100;

    vm.getCode = function (username, password) {
      vm.userService.login(username, password)
          .then(function (data) {
            if (data.status === 'OK') {
              vm.userService.logged = true;
              vm.userService.username = username;
              vm.userService.password = password;
            } else {
              vm.userService.logged = false;
              vm.userService.username = '';
              vm.userService.password = '';
              vm.code = 'Prisijungimo duomenys neteisingi !';
              vm.success = false;
            }

            vm.enService.getCode()
                .then(function (data) {
                  vm.code = 'Šis tas naudingo - ' + data.code;
                  vm.success = true;
                });
          }, function (error) {
              vm.code = 'Prisijungimo duomenys neteisingi !';
              vm.success = false;
          });
    };

    vm.changePosition = function() {
        vm.x = window.Math.random() * 500;
        vm.y = window.Math.random() * 500;
    };

  };

})();