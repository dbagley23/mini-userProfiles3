var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {
  $scope.getUsers = function() {
    service.getAllPosts().then(function(dataFromService) {
      $scope.users = dataFromService;
    });
  }

  $scope.getUsers();

});
