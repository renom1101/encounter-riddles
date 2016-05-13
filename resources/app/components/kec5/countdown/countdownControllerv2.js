(function() {
  'use strict';

  angular
    .module('encounterApp.kec5.countdown')
    .controller('CountdownControllerv2', countdownController);

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

            var years = 3547;
            var months = 11 - (new Date()).getMonth();
            var realDays = 25 - (new Date()).getDate();
            var days = Math.floor(distance / (24 * 60 * 60 * 1000));
            var hours = Math.floor(distance / (60 * 60 * 1000)) - (days * 24);
            var minutes = Math.floor(distance / (60 * 1000)) - (hours * 60) - (days * 24 * 60);
            var seconds = Math.floor(distance / 1000) - (minutes * 60) - (hours * 60 * 60) - (days * 24 * 60 * 60);

            vm.counter = years + 'm. ' + months + 'mėn. ' + realDays + 'd. ' + hours + 'val. ' + minutes + 'min. ' + seconds + 's.';

            countdown();
        }, 1000);
    };
  };

})();