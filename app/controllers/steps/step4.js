angular.module("bookapp").controller("Step4Ctrl", function($scope, stepsdata, $state) {

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



    $scope.nextStep = function(){

      if ($state.params.id){
        $state.go('app.finalPage',{id: $state.params.id})
      } else {
        $state.go('app.finalPage')
      }
    }

})
