angular.module('urlalias.controllers').controller('redirecturls', ['$scope', '$window', '$filter', '$state', '$timeout', '$rootScope', '$http', function($scope, $window, $filter, $state, $timeout, $rootScope, $http) {

    const APP_URL = 'https://urlaliaser.herokuapp.com'//http://localhost:3333';

    if ($state.params.path !== undefined) {
        var path = $state.params.path;
        var code = path.substr(1, path.length);
        $http.get(APP_URL + '/longurl', { params: { code: code } }).then(function(response) {
            if (response.length == 0) {
                $state.go('home');
            } else {
                window.open(response.data[0].originallink, (_self))
            }

        }, function(error) {
            console.log(error)
        })
    }
}])