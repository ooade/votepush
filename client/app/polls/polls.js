'use strict';

angular.module('votingappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/polls', {
        templateUrl: 'app/polls/polls.html',
        controller: 'PollsCtrl'
      })
	  .when('/polls/new', {
        templateUrl: 'app/polls/new.html',
        controller: 'PollsCtrl'
      });
  });
