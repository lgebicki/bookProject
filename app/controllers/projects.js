angular.module("bookapp").controller("ProjectsCtrl", function($scope, $firebaseObject, $firebaseAuth, $firebaseArray) {

	$scope.authObj = $firebaseAuth();
	var firebaseUser = $scope.authObj.$getAuth();
	var ref = firebase.database().ref(firebaseUser.uid);
	var listref = ref.child("projects")
	var list = $firebaseArray(listref);
	$scope.list = list;

	$scope.showInput = false

	$scope.toggleInput = function(){
		$scope.showInput = true
		var doc = document.querySelector('.input-field')
		setTimeout(function(){
			doc.focus()
		})

	}

	$scope.selected = []
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
