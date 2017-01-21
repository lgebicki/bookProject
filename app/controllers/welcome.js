angular.module("bookapp").controller("WelcomeCtrl", function($scope, $firebaseObject, $firebaseAuth) {


  $scope.authObj = $firebaseAuth();
  var firebaseUser = $scope.authObj.$getAuth();

  $scope.data = {}

  $scope.saveobj = function(){
    var ref = firebase.database().ref(firebaseUser.uid);
    var obj = $firebaseObject(ref);

    obj.$bindTo($scope, "data").then(function() {
      $scope.data.ournewdata = "some random album title";  // will be saved to the database
    });
    // $scope.data = {}
    // obj.$bindTo($scope, "data");
    // $scope.data.hello = 'world'

  }

})
