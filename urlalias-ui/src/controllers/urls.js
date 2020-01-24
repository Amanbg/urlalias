angular.module('urlalias.controllers').controller('urls', ['$scope', '$window', '$filter', '$state', '$timeout', '$rootScope', '$http', function($scope, $window, $filter, $state, $timeout, $rootScope, $http) {

    $scope.url = {}
    $scope.url = {
        originalLink: null,
        shortenedLink: null
    }

    const APP_URL = 'http://localhost:3333'

    $scope.shortenUrl = function(longurl) {
        $http.post(APP_URL + '/shortenurl', { data: longurl }).then(function(response) {
            console.log('shortened url==>', response);
            $scope.url = {
                shortenedLink: 'http://localhost:3000/#!/' + response.data.shortenedLink
            }
        }, function(error) {
            console.log(error)
        })
    }

    $scope.url = {
        shortenedLink: 'http://localhost:3000/#!/longurl?code=' + 'GAMTKR1' //response.data.shortenedLink
    }
    console.log('sssssss', $state)
    //$scope.getOriginalUrl = function() {
        if ($state.params.code !== undefined) {
            $http.get(APP_URL + '/longurl', { code: $state.params.code }).then(function(response) {
                console.log('longurl ==>', response);
                $scope.url = {
                    originalLink: response.data.originalLink
                }
            }, function(error) {
                console.log(error)
            })
        }
    //}
    // getOriginalUrl()

}])


//https://docs.google.com/document/d/12TxT2LjnWHYAuHGq5yQBxj3IVUehW-XfHgwEbR8W5nw/edit?usp=sharing