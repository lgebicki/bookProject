angular.module("bookapp").controller("FinalCtrl", function($scope, $firebaseArray, $firebaseAuth, $state, $mdDialog) {
angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache']);
	$scope.id = $state.params.id
  $scope.movedBibliography = ""
  var movedBibliography = ""
	// $scope.authObj = $firebaseAuth();
	// var firebaseUser = $scope.authObj.$getAuth();
	// var ref = firebase.database().ref(firebaseUser.uid);
	// var listref = ref.child("projects")
	// var list = $firebaseArray(listref);
	// list.$loaded().then(function(){

	// 	var rec = list.$getRecord($state.params.id);
	// 	console.log(rec)
	// })


  $scope.authObj = $firebaseAuth();
  var firebaseUser = $scope.authObj.$getAuth();
  var basicRef = firebase.database().ref(firebaseUser.uid).child('projects').child($state.params.id);
  $scope.citationList = $firebaseArray(basicRef.child('citations'));
  $scope.bibliographyList = $firebaseArray(basicRef.child('bibliography'));
  $scope.trashList = $firebaseArray(basicRef.child('trash'));
  $scope.toDoList = $firebaseArray(basicRef.child('toDoList'));
  // $scope.citationList.$loaded().then(function(x){
  //   console.log(x)
  // })
  // $scope.bibliographyList.$loaded().then(function(x){
  //   console.log(x)
  // })


  $scope.removeItemCitation = function(item){
    console.log(item)
    $scope.trashList.$add({
      type: 'citation',
      data: item
    }).then(function(){
      $scope.citationList.$remove(item)  
    })
    
  }

  $scope.removeItemBibliography = function(item){
    console.log(item)
    $scope.trashList.$add({
      type: 'bibliography',
      data: item
    }).then(function(){
      $scope.bibliographyList.$remove(item)  
    })

  }

  $scope.restoreItem = function(item){
    console.log(item)
    if (item.type == 'citation'){
      $scope.citationList.$add(item.data).then(function(){
          $scope.trashList.$remove(item)  
        })    
    }
    if (item.type == 'bibliography'){
      $scope.bibliographyList.$add(item.data).then(function(){
          $scope.trashList.$remove(item)  
        })    
    }
  
  }

  $scope.removeTrashItem = function(item){
    $scope.trashList.$remove(item)
  }

  $scope.displayItem = function(ev, item, type){
    console.log(item)
    $scope.activeItem = item
    $scope.editType = type
    $mdDialog.show({
      scope: $scope,
      preserveScope: true,
      templateUrl: 'views/dialogs/editItem.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });    
  }

    $scope.cancel = function(){
      $mdDialog.hide();
    }

	imagePath = ""

    $scope.todos = [
      {
        face : imagePath,
        what: 'Cormack (1994, pp.32-33)',
        who: "",
        when: "",
        notes: ""
      },
      {
         face : imagePath,
        what: 'Cormack (1994, pp.32-33)',
        who: "",
        when: "",
        notes: ""
      },
      {
         face : imagePath,
        what: 'Cormack (1994, pp.32-33)',
        who: "",
        when: "",
        notes: ""
      },
      {
        face : imagePath,
        what: 'Cormack (1994, pp.32-33)',
        who: "",
        when: "",
        notes: ""
      },
      {
         face : imagePath,
        what: 'Cormack (1994, pp.32-33)',
        who: "",
        when: "",
        notes: ""
      },
    ];

})
