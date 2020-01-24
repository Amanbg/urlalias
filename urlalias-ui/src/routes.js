angular.module('urlalias').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider,
    $urlRouterProvider, $locationProvider, $httpProvider) {

    $stateProvider
        .state("home", {
            url: '/',
            views: {
                "mainContent": {
                    'templateUrl': "src/views/home.html"
                }
            }
        })

    $stateProvider
        .state("home1", {
            url: '/longurl/:code',
            views: {
                "mainContent": {
                    'templateUrl': "src/views/home.html"
                }
            }
        })
}])