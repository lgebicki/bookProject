angular.module("bookapp").controller("ProjectsCtrl", function($scope, $firebaseObject, $firebaseAuth) {

$scope.data  = [
	{name: "project1",
	 value: 32
	 }, {
	 	name: "project2",
	 	value: 12
	 }, {
	 	name: "project3",
	 	value: 88
	 }
]

})
