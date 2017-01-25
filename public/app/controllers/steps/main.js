angular.module("bookapp").controller("StepMainCtrl", function($scope) {

  $scope.steps = {
      index: 1,
      set: function(index){
          this.index = index
      }
  }

})
