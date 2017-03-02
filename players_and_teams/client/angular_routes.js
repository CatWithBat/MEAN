var myApp = angular.module('myApp', ['ngRoute']);
		
		myApp.config(function ($routeProvider) {
	      $routeProvider
	        .when('/',{
	            templateUrl: 'partials/players_partial.html',
	        })
	        .when('/players',{
	            templateUrl: 'partials/players_partial.html'
	        })
	        .when('/teams',{
	        	templateUrl: 'partials/teams_partial.html'
	        })
	        .when('/associations',{
	        	templateUrl: 'partials/associations_partial.html'
	        })
	        .otherwise({
	          redirectTo: '/'
	        });
  		});
