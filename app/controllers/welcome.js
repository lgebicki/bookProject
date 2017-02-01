angular.module("bookapp").controller("WelcomeCtrl", function($scope, $firebaseObject, $firebaseAuth, $http, $sce) {


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

  $scope.request = function(){



     $http({
        method: 'GET',
        url: 'https://wordcat.herokuapp.com/'
      }).then(function successCallback(response) {
        console.log('yes')
        console.log(response)
        //
        // var x2js = new X2JS();
        // $scope.finaldata = x2js.xml_str2json(response.data);
        // console.log($scope.finaldata);

        }, function errorCallback(response) {
          console.log(response)
        });
  }

})
