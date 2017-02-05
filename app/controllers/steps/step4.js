angular.module("bookapp").controller("Step4Ctrl", function($scope, stepsdata, $state, $firebaseArray, $firebaseAuth) {

    $scope.steps.set(4)
    console.log('------ our data --------')
    console.log(stepsdata)
    $scope.title = stepsdata.title
    $scope.publisher = stepsdata.publisher
    $scope.place = stepsdata.place
    $scope.year = stepsdata.year
    $scope.authorName = stepsdata.authorName
    $scope.authorSurname = stepsdata.authorSurname
    $scope.authors = stepsdata.authors
    $scope.place = stepsdata.place
    $scope.finalname= stepsdata.finalname
    $scope.page= stepsdata.page
    $scope.stepsdata = stepsdata

    $scope.ifProject = false
    
    

    // // add an item
    

    // // remove an item
    // list.$remove(2).then(...);



    if ($state.params.id){
      $scope.ifProject = true
      console.log('project id', $state.params.id)
      var citation  = $scope.authors[0].surname + " (" +$scope.year  
      if ($scope.stepsdata.endPage){
        citation += "pp. " + $scope.stepsdata.startpage + $scope.stepsdata.lastpage + ")" 

      } else {
        citation += "p. " + $scope.page + ")"
      }
      
      var bibliography = $scope.authors[0].surname + ", " + $scope.authors[0].name[0] + ". " + $scope.authors[0].init + "., " + $scope.year + ". " + $scope.title + ". " + $scope.place + ": " + $scope.publisher + "."
      


      $scope.authObj = $firebaseAuth();
      var firebaseUser = $scope.authObj.$getAuth();
      var basicRef = firebase.database().ref(firebaseUser.uid).child('projects').child($state.params.id);
      var citationList = $firebaseArray(basicRef.child('citations'));
      var bibliographyList = $firebaseArray(basicRef.child('bibliography'));
      citationList.$add({ text: citation })
      bibliographyList.$add({ text: bibliography })


    }  


    $scope.nextStep = function(){

      if ($state.params.id){
        $state.go('app.finalPage',{id: $state.params.id})
      } else {
        $state.go('app.finalPage')
      }
    }

})
