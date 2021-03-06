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

    // $stateProvider
    //     .state("original", {
    //         url: '/longurl/:code',
    //         views: {
    //             "mainContent": {
    //                 'templateUrl': "src/views/redirecturl.html"
    //             }
    //         }
    //     })
     $stateProvider
        .state("otherwise", {
            url: '*path',
            views: {
                "mainContent": {
                    'templateUrl': "src/views/redirecturl.html"
                }
            }
        })
}])