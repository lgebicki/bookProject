// Within the square brackets - we specify applicaiton dependencies(third-party libraries)
// In our case it's "Angular-Material" - for interface components
// And badass UI-Router which make smart pagination, 
var app = angular.module('bookapp', ['ngMaterial', 'ui.router', 'firebase', 'md.data.table', 'angularTrix'])

app.config(function($mdThemingProvider){
  $mdThemingProvider.theme('default').primaryPalette('teal')
})


// Just the snippet of code which starts the application itself
document.addEventListener("DOMContentLoaded", function(){
  angular.bootstrap(document.body, ['bookapp']);
});

app.run(function($firebaseAuth, $state){
  setTimeout(function(){
    var authObj = $firebaseAuth();
    var firebaseUser = authObj.$getAuth();
    if ((firebaseUser == null) && ($state.current.name!='login')) {
      console.log("Signed out");
      $state.go('login')
    } else {
      if ($state.current.name!='login'){
        if (!firebaseUser.emailVerified){
          $state.go('login')
        }
      }

    }
  })

})
