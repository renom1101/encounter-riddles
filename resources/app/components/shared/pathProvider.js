angular.module('encounterApp').provider('path', function () {
    var baseUrl;
    return {
        setBaseUrl: function (value) {
            baseUrl = value;
        },
        $get: function () {
            return {
                baseUrl: baseUrl
            }
        }
    }
});