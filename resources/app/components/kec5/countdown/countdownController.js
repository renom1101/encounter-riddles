(function() {
  'use strict';

  angular
    .module('encounterApp.kec5.countdown')
    .controller('CountdownController', countdownController);

    countdownController.$inject = [
        '$timeout'
    ];

  function countdownController($timeout) {

    var vm = this;

    countdown();

    function countdown() {
        $timeout(function() {
            var end = new Date(113415095490000);
            var now = new Date();
            var distance = end - now;

            vm.counter = Math.floor(distance / 1000);

            countdown();
        }, 1000);
    };
  };

})();