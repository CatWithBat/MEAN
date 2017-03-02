;(function(){
	'use strict'

	angular
		.module('module')
		.controller('surveyController', controller)

		function Controller (){
			var self = this
			self.register = function(){
				console.log(self.result)
				resultFactory.submit
			}
		}
})