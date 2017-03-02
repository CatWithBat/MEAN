;(function (){
	'use strict'

	angular
		.module('module')
		.controller('userController', controller)

		function Controller (){
			var self = this
			self.sample = 'tom'
			self.register = function(){
				console.log(self.users)
				userFactory.register(self.users, function(){
					console.log('in callback')
				})
			}
		}
})()