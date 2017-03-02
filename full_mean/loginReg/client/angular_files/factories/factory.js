(function(){
	'use strict'

	angular
		.module('myApp')
		.factory('userFactory', factory)

		function factory ($http){
			var factory ={

			}
		factory.register = function (userInfo, callback) {
			$http.post('/register',userInfo, function(returnData){
				console.log('got data back from backend')
			})
		}
		return factory
		}
})