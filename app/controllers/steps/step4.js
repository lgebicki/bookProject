angular.module("bookapp").controller("Step4Ctrl", function($scope, stepsdata) {

    $scope.steps.set(4)
    console.log('------ our data --------')
    console.log(stepsdata)
    $scope.title = stepsdata.title
    $scope.publisher = stepsdata.publisher
    $scope.place = stepsdata.place
    $scope.allauthors = stepsdata.allauthors

})
