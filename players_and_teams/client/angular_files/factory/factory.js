var factoryApp = angular.module('myApp', [])
factoryApp.factory('assocFactory', function(){
	var assoc = []
	factory.assoc = 'assoc'

factory.bind = (callback){
	callback(assoc)
	console.log('assocfactory')
}
	
	return factory
})
