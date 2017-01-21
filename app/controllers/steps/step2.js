angular.module("bookapp").controller("Step2Ctrl", function($scope, $firebaseAuth, $firebaseObject, stepsdata, $state) {

  $scope.steps.set(2)

  $scope.list = [
    {name: 'Book', id: 0},
    {name: 'Pdf', id: 1},
    {name: 'Article', id: 2},
    {name: 'Journal', id: 3},
    {name: 'Song', id: 4},
    {name: 'Patent', id: 5},
    {name: 'Website', id: 6},
    {name: 'Movie', id: 7},
    {name: 'Other', id: 8}
  ]
  
  $scope.nextStep = function(item){
    stepsdata.step2 = item.name
    $state.go('app.steps.three')
  }
  

  // console.log(stepsdata)
  //
  // $scope.authObj = $firebaseAuth();
  // var firebaseUser = $scope.authObj.$getAuth();
  // console.log(firebaseUser)
  // $scope.data = {}
  // var ref = firebase.database().ref(firebaseUser.uid);
  // var obj = $firebaseObject(ref);
  //
  // obj.$bindTo($scope, "data").then(function() {
  //   console.log($scope.data)
  //   $scope.data.ournewdata = "some random album title";  // will be saved to the database
  // });

})
