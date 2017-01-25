angular.module("bookapp").controller("ProjectsCtrl", function($scope, $firebaseObject, $firebaseAuth, $firebaseArray, $mdToast, $mdDialog, $state) {

	$scope.authObj = $firebaseAuth();
	var firebaseUser = $scope.authObj.$getAuth();
	var ref = firebase.database().ref(firebaseUser.uid);
	var listref = ref.child("projects")
	var list = $firebaseArray(listref);
	$scope.list = list;
	console.log($scope.list)
	$scope.currentProject = "";

	$scope.promise = $scope.list.$loaded()
	console.log($scope.promise)
	$scope.showInput = false

	$scope.toggleInput = function(){
		$scope.showInput = true
		var doc = document.querySelector('.input-field')
		setTimeout(function(){
			doc.focus()
		})
	}

	$scope.handleInput = function(e){
		switch (e.keyCode){
			case 27:
				$scope.showInput = false;
				break;
			case 13:
				if ($scope.newItemName.length>4){
				   list.$add({ name: $scope.newItemName }).then(function(ref){
				   	$scope.showConfirm(ref.key)
				   })
				     $scope.currentProject = ($scope.newItemName);
					 $scope.newItemName = ""
					 $scope.showInput = false;
				} else {
					$mdToast.show(
		        $mdToast.simple().textContent('Name is too short').position('bottom right').hideDelay(3000)
		      );
				}
				break;
		}
	}

	$scope.removeItem = function(item){
		var name = item.name;
		list.$remove(item).then(function(ref) {
		  // ref.key === item.$id; // true
			$mdToast.show(
				$mdToast.simple().textContent(`'${name}' has been removed`).position('bottom right').hideDelay(3000)
			);
		});
	}

	$scope.showConfirm = function(id) {
	    // Appending dialog to document.body to cover sidenav in docs app
	    var confirm = $mdDialog.confirm()
	          .title('Your project is empty!')
	          .textContent(`Would you like to add some stuff to ${$scope.currentProject} project?`)
	          .ariaLabel('Lucky day')
	          .ok('Sure!')
	          .cancel("Leave it empty for now");

	    $mdDialog.show(confirm).then(function() {
	      $state.go('app.finalPage', {id: id})
	    }, function() {
	      console.log('rejected')
	    });
	  };


})
