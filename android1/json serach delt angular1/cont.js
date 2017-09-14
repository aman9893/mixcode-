var app = angular.module('myApp', []);

app.controller('customersCtrl', function($scope, $http) {

  $http.get("emp.json").then(function (response) {

      $scope.myData = response.data;
      
  });
});