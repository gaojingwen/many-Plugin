/**
 * Created by LHT on 2016/1/6.
 */

var mainApp = angular.module('mainApp', []);

//1.ng-repeat的数据绑定
mainApp.controller('cjrlController', function ($scope, $http, $filter) {
    $scope.domain = Domain;
    $scope.url = $scope.domain+"/finance_calendar/list.jsonp?callback=JSON_CALLBACK";
    $scope.date = $filter('date')(new Date(), "yyyy-MM-dd");
    $scope.nowDate = $filter('date')(new Date(), "MM-dd HH:mm");
    $scope.getCjrlList= function() {
        $http.jsonp($scope.url, {
            params: {
                "desc": true,
                "date_str": $scope.date
                }
        }).success(function (data) {
            $scope.itemList = data.itemList;

        });
    }
    $scope.getCjrlList();
});


