angular.module("bookapp").controller("LoginCtrl", function($scope, $firebaseAuth, $state, $mdToast, $timeout, $mdDialog) {

  $scope.authObj = $firebaseAuth();
  var firebaseUser = $scope.authObj.$getAuth();
  if (firebaseUser) {
    console.log("Signed in as:", firebaseUser.uid);
    $state.go('app.welcome')
  } else {
    console.log("Signed out");
  }
  $scope.login = function(){
    $scope.authObj.$signInWithEmailAndPassword($scope.email, $scope.pass).then(function(firebaseUser) {
      if (!firebaseUser.emailVerified){
        $mdToast.show(
          $mdToast.simple().textContent("Please, confirm your email!").position('bottom right').hideDelay(3000)
        );
      } else {
        $state.go('app.welcome')
      }

    }).catch(function(error) {
      console.error("Authentication failed:", error);
      $mdToast.show(
        $mdToast.simple().textContent(error.code).position('bottom right').hideDelay(3000)
      );

    });

  }

  $scope.register = function(){
    if ($scope.newpass != $scope.newpass2){
      $mdToast.show(
        $mdToast.simple().textContent('Passwords doesnt match').position('bottom right').hideDelay(3000)
      );
    } else {
      $scope.authObj.$createUserWithEmailAndPassword($scope.newemail, $scope.newpass)
        .then(function(firebaseUser) {

          console.log(firebaseUser)
          console.log("User " + firebaseUser.uid + " created successfully!");
          // var user = firebase.auth().currentUser;
          firebaseUser.sendEmailVerification().then(function() {
            var confirm = $mdDialog.confirm()
                  .title('Attention')
                  .textContent('Please, confirm your email')
                  .ariaLabel('email')
                  .ok('Ok')

            $mdDialog.show(confirm).then(function() {
              $scope.newemail = ""
              $scope.newpass = ""
              $scope.newpass2 = ""
            }, function() {
              console.log('rejected')
            });
            // Email sent.
          }, function(error) {
            console.log('havent delivered')
            // An error happened.
          });
          // User is signed in.

        }).catch(function(error) {
          console.error("Error: ", error);
          $mdToast.show(
            $mdToast.simple().textContent(error.code).position('bottom right').hideDelay(3000)
          );

        });
    }

  }
})
