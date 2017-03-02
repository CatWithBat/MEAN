;(function(){
	'use strict'


	angular
		.module('myApp', ['ngRoute'])
		.config(config)

	function config($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'partials/loginReg.html'
			})
			.otherwise({
				redirectTo: '/'
			})
	}
})