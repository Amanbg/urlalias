angular.module('urlalias.controllers').controller('urls', ['$scope', '$window', '$filter', '$state', '$timeout', '$rootScope', '$http', function($scope, toaster, $window, $filter, $state, $timeout, $rootScope, $http) {
    $scope.user = {}

    //const APP_URL = 'http://localhost:3333'

    // $scope.addUser = function(user) {
    //     $http.post(APP_URL + '/user', { data: user }).then(function(response) {
    //         toaster.pop('success', 'User', 'user added successfully');
    //         $scope.user = {}
    //         initLoad();
    //     })
    // }
    $scope.user.text = "Welcom Baba";
    // function initLoad(){
    // 	$scope.userList = [];
    // 	$http.get(APP_URL+'/user').then(function(response){
    // 		$scope.userList = response.data;
    // 	})
    // }

    // initLoad()
}])