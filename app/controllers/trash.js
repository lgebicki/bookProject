angular.module("bookapp").controller("TrashCtrl", function($scope, $firebaseObject, $firebaseAuth, $firebaseArray, $mdToast, $mdDialog, $state) {



	$scope.movedBibliography = app.finalPage.movedBibliography
	var list = movedBibliography
	console.log("This data is moved")
	console.log(list)

	