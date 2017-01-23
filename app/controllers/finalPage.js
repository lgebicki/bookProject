angular.module("bookapp").controller("FinalCtrl", function($scope, $firebaseArray, $firebaseAuth, $state) {


	$scope.authObj = $firebaseAuth();
	var firebaseUser = $scope.authObj.$getAuth();
	var ref = firebase.database().ref(firebaseUser.uid);
	var listref = ref.child("projects")
	var list = $firebaseArray(listref);
	list.$loaded().then(function(){

		var rec = list.$getRecord($state.params.id);	
		console.log(rec)
	})
	imagePath = ""
	
    $scope.todos = [
      {
        face : imagePath,
        what: 'Cormack (1994, pp.32-33)',
        who: "",
        when: "",
        notes: ""
      },
      {
         face : imagePath,
        what: 'Cormack (1994, pp.32-33)',
        who: "",
        when: "",
        notes: ""
      },
      {
         face : imagePath,
        what: 'Cormack (1994, pp.32-33)',
        who: "",
        when: "",
        notes: ""
      },
      {
        face : imagePath,
        what: 'Cormack (1994, pp.32-33)',
        who: "",
        when: "",
        notes: ""
      },
      {
         face : imagePath,
        what: 'Cormack (1994, pp.32-33)',
        who: "",
        when: "",
        notes: ""
      },
    ];	
	
})
