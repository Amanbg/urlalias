angular.module('urlalias', [
        'ui.router',
        'urlalias.controllers',
        //'ngSanitize',
        //'ngResource',
        //'urlalias.services',
        //'ngAnimate',
        //'urlalias.env'
    ])
    .run(['$rootScope', '$state', '$window', '$timeout', '$document', '$location', '$http', function($rootScope, $state, $window, $timeout, $document, $location, $http) {

    }]);
angular.module('urlalias.controllers', [])