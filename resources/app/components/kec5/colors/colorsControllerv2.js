(function() {
  'use strict';

  angular
    .module('encounterApp.kec5.colors')
    .controller('ColorsControllerv2', colorsController);

    colorsController.$inject = [
        '$timeout'
    ];

  function colorsController($timeout, $location) {

    var vm = this;
    vm.changeColor = changeColor;
    vm.showHint = showHint;
    vm.r = 0;
    vm.g = 0;
    vm.b = 0;
    vm.hints = [1, 30];

    countdown();

    function countdown() {
        $timeout(function() {
            var now = new Date();

            vm.counter = Math.floor((now % 60000) / 1000);

            countdown();
        }, 1000);
    };

      function changeColor() {
          if (vm.counter <= 10) {
              var act = vm.counter;
              vm.r = act * 25;
              vm.g = 0;
              vm.b = 0;
          }
          else if (vm.counter <= 20) {
              var act = vm.counter-10;
              vm.r = 0;
              vm.g = act * 25;
              vm.b = 0;
          }
          else if (vm.counter <= 30) {
              var act = vm.counter-20;
              vm.r = 0;
              vm.g = 0;
              vm.b = act * 25;
          }
          else if (vm.counter <= 40) {
              var act = vm.counter-30;
              vm.r = act * 25;
              vm.g = act * 25;
              vm.b = 0;
          }
          else if (vm.counter <= 50) {
              var act = vm.counter-40;
              vm.r = act * 25;
              vm.g = 0;
              vm.b = act * 25;
          }
          else {
              var act = vm.counter-50;
              vm.r = 0;
              vm.g = act * 25;
              vm.b = act * 25;
          }

          return {
              backgroundColor:'rgb('+vm.r+','+vm.g+','+vm.b+')'
          };
      };

      function showHint() {
        return true;
      };
  };

})();