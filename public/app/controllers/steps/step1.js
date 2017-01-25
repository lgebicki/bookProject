angular.module("bookapp").controller("Step1Ctrl", function($scope, stepsdata, $state) {

  $scope.steps.set(1)
  $scope.list = [
    {name: 'Harward', id: 0},
    {name: 'Turabian', id: 1},
    {name: 'Chicago', id: 2},
    {name: 'Vancouver', id: 3},
    {name: 'ISBN', id: 4},
    {name: 'MLA', id: 5},
    {name: 'APA', id: 6},
    {name: 'PWN', id: 7},
    {name: 'Other', id: 8}
  ]

  $scope.nextStep = function(item){
    stepsdata.step1 = item.name
    $state.go('app.steps.two')
  }

})
