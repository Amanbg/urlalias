angular.module('urlalias.controllers').controller('urls', ['$scope', '$window', '$filter', '$state', '$timeout', '$rootScope', '$http', function($scope, $window, $filter, $state, $timeout, $rootScope, $http) {

    $scope.url = {}
    $scope.url = {
        originalLink: null,
        shortenedLink: null
    }

    var monthMapObj = {
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
        10: null,
        11: null,
    };
    const APP_URL = 'http://localhost:3000'

    $scope.shortenUrl = function(longurl) {
        $http.post(APP_URL + '/shortenurl', { data: longurl }).then(function(response) {
            $scope.url = {
                shortenedLink: response.data.shortenedlink
            }
        }, function(error) {
            console.log(error)
        })
    }

    function initialLoad() {
        $http.get(APP_URL + '/shortenurl').then(function(response) {
            $scope.urlList = []
            $scope.urlList = response.data
            $scope.data = [];

            for (var k = 0; k < $scope.urlList.length; k++) {
                var date = new Date($scope.urlList[k].created_at)
                var month = date.getMonth()
                monthMapObj[month] = monthMapObj[month] + 1;
            }

            for (var monthCount in monthMapObj) {
                $scope.data.push(monthMapObj[monthCount]);
            }

            $scope.loadChart($scope.data);

        })
    }

    $scope.loadChart = function(data) {
        Highcharts.chart('container', {
            chart: {
                type: 'area'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },

            plotOptions: {
                series: {
                    fillOpacity: 0.1
                }
            },

            series: [{
                data: data //[29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }]
        });
    }

    initialLoad();
}])