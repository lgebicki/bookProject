angular.module("bookapp").controller("AppCtrl", function($scope, $state,$firebaseObject, $firebaseAuth, $firebaseAuth) {
	$scope.authObj = $firebaseAuth();

	$scope.exit = function(){
		$scope.authObj.$signOut().then(function(){
			$state.go('login')	
		})
		
	}

})
