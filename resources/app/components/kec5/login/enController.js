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
    vm.y = 50;
    vm.stage = 0;

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
                  vm.code = '' + data.code;
                  vm.success = true;
                });
          }, function (error) {
              vm.code = 'Prisijungimo duomenys neteisingi !';
              vm.success = false;
          });
    };

    vm.changePosition = function() {
      vm.stage++;

      if (vm.stage == 0) {
        vm.x = 0;
        vm.y = 50;
      }

      if (vm.stage == 1) {
        vm.x = 300;
      }

      if (vm.stage == 2) {
        vm.y = 350;
      }

      if (vm.stage == 3) {
        vm.x = 0;
      }

      if (vm.stage == 4) {
        vm.y = 650;
        vm.stage = -1;
      }
    };

  };

})();