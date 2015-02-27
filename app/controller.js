var angular = require('angular');

module.exports = function ExampleController($scope, $http) {
	
	$scope.message = "Hello from Example Controller!";
	
	$http.get('/post').success(function(result) {
		
		$scope.message = result;
	});
};
