angular.module("bookapp").controller("Step4Ctrl", function($scope, stepsdata,$state) {

    $scope.steps.set(4)
    console.log('------ our data --------')
    console.log(stepsdata)
    $scope.title = stepsdata.title
    $scope.publisher = stepsdata.publisher
    $scope.place = stepsdata.place
    $scope.allauthors = stepsdata.allauthors


    $scope.nextStep = function(){

      if ($state.params.id){
        $state.go('app.finalPage',{id: $state.params.id})
      } else {
        $state.go('app.finalPage')
      }
    }

})
