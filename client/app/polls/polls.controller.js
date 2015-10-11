'use strict';

angular.module('votingappApp')
  .controller('PollsCtrl', function ($scope, $http, Auth) {
	$scope.isLoggedIn = Auth.isLoggedIn;
	$scope.placeholders = ["Bacon","Tuna"];
	$scope.options = [];
	
	$scope.moreOptions = function(){
	  this.placeholders.push("New option");
	};
	
    $http.get('/api/polls').success(function(poll) {
      $scope.poll = poll;
    });
	
	$scope.addNew = function(){
		var pollName = $scope.pollName;
		var options = $scope.options;
	}
  });
