angular.module('urlalias.controllers').controller('redirecturls', ['$scope', '$window', '$filter', '$state', '$timeout', '$rootScope', '$http', function($scope, $window, $filter, $state, $timeout, $rootScope, $http) {

    const APP_URL = 'http://localhost:3333';

    if ($state.params.code !== undefined) {
        $http.get(APP_URL + '/longurl', { params: { code: $state.params.code } }).then(function(response) {
            $scope.openUrl(response.data[0].originallink);
            $scope.url = {
                originalLink: response.data[0].originallink
            }
            $state.go('home');
        }, function(error) {
            console.log(error)
        })
    }


    $scope.openUrl = function(link) {
        var windowReference = window.open();
        windowReference.location = link;
    }
}])