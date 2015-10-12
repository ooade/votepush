'use strict';

angular.module('votingappApp')
  .config(function ($routeProvider) {
    $routeProvider
	  .when('/polls/new', {
        templateUrl: 'app/polls/new.html',
        controller: 'PollsCtrl'
      })
      .when('/polls/:fullName/:title', {
         templateUrl: 'app/polls/polls.html',
        controller: 'PollsCtrl'       
      })
	  .otherwise({
		templateUrl: 'app/polls/polls.html',
        controller: 'PollsCtrl'
	 });
  });
