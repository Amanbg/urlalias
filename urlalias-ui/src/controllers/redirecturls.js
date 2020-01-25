angular.module('urlalias.controllers').controller('redirecturls', ['$scope', '$window', '$filter', '$state', '$timeout', '$rootScope', '$http', function($scope, $window, $filter, $state, $timeout, $rootScope, $http) {

    $scope.url = {
        shortenedLink: 'GAMTKR1' //response.data.shortenedLink
    }

    const APP_URL = 'http://localhost:3333';

    console.log('sssssss', $state)
    //$scope.getOriginalUrl = function() {
    if ($state.params.code !== undefined) {
        $http.get(APP_URL + '/longurl', {params:{ code: $state.params.code }}).then(function(response) {
            console.log('longurl ==>', response);
            $scope.url = {
                originalLink: response.data.originalLink
            }
        }, function(error) {
            console.log(error)
        })
    }
}])