'use strict';

angular.module('votingappApp')
  .controller('PollsCtrl', function ($scope, $routeParams, $http, Auth, $window) {
	$scope.isLoggedIn = Auth.isLoggedIn;
	$scope.placeholders = ["Bacon","Tuna"];
	$scope.options = [];
	$scope.dbdata = [];
	$scope.myPolls = [];
	
	var wallOwner = $routeParams.fullName;
	var fullName = Auth.getCurrentUser().name;
	
	$scope.deletePoll = function(id){
		$http.delete('/api/polls/' + id, function(){
	    $window.location.href = '/polls/';
		});
	};
	
	$scope.moreOptions = function(){
  		this.placeholders.push("New option");
	};	
	
	$http.get('/api/polls/' + fullName).success(function(polls){
  		$scope.myPolls = polls;	
		if(polls.length < 1){
			$scope.isPoll = false;
		}
		else{
			$scope.isPoll = true;
		}
	});
	
	$scope.addNew = function(){
		var pollName = $scope.pollName;
		var options = $scope.options;
		$http.post('/api/polls', {name:pollName, fullName:fullName, options:options}).success(function(poll) {
	 	$window.location.href = '/polls/'+fullName+'/'+pollName;
		});
	}

//	$http.get('/api/polls').success(function(polls) {
//      $scope.dbdata = polls;
//    });
	
	/** Below is strictly for the charts **/
	
	var data = [
    {
        value: 2,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 3,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 5,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];
//var ctx = document.getElementById("myChart").getContext("2d");
//var myDoughnutChart = new Chart(ctx).Doughnut(data);
});
