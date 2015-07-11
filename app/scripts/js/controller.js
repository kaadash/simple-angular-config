var helloworld = function() {
	console.log('helloworld');
	return 'helloworld';
};
var myApp = angular.module('myApp', []);
myApp.controller('helloworldController', function($scope){
	$scope.hello = 'hello world';
});