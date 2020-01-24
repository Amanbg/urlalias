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
                originalLink: null,
                shortenedLink: null
            }
        },function(error){
            console.log(error)
        })
    }
}])


//https://docs.google.com/document/d/12TxT2LjnWHYAuHGq5yQBxj3IVUehW-XfHgwEbR8W5nw/edit?usp=sharing