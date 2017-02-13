angular.module("bookapp").controller("Step1Ctrl", function($scope, stepsdata, $state) {

  $scope.steps.set(1)
  $scope.list = [
    {name: 'Chicago', id: 0},
    {name: 'Harvard', id: 1},
    {name: 'MLA', id: 2},
    {name: 'APA', id: 3},
    {name: 'Vancouver', id: 4},
    // {name: 'Vancouver', id: 5},
    // {name: 'APA', id: 6},
    // {name: 'PWN', id: 7},
    // {name: 'Other', id: 8}
  ]

  $scope.nextStep = function(item){
    stepsdata.step1 = item.name
    if ($state.params.id){
      $state.go('app.steps.two',{id: $state.params.id})
    } else {
      $state.go('app.steps.two')
    }

  }

})
