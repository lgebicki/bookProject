angular.module("bookapp").controller("WritePaperCtrl", function($scope, $state,$firebaseObject, $firebaseAuth, $firebaseArray, $timeout) {



	$scope.authObj = $firebaseAuth();
	var firebaseUser = $scope.authObj.$getAuth();
	var basicRef = firebase.database().ref(firebaseUser.uid).child('projects').child($state.params.id);
	$scope.contentList = $firebaseArray(basicRef.child('texts'));
	$scope.content = ""

	

	$scope.page = {
		current: 1,
		max: 1,
		turnLeft: function(){
			var updatedPage = $scope.page.current - 1
			if (updatedPage>0){
				$scope.page.current = updatedPage
			} else {
				$scope.page.current = 1
			}
			$scope.content = $scope.contentList[$scope.page.current-1].text
		},
		turnRight: function(){
			var updatedPage = $scope.page.current + 1
			if (updatedPage<=$scope.page.max){
				$scope.page.current = updatedPage
				$scope.content = $scope.contentList[$scope.page.current-1].text
			} else {
				$scope.page.max++;
				$scope.page.current = $scope.page.max
				$scope.contentList.$add({text: "New paper"}).then(function(){
					$scope.content = $scope.contentList[$scope.page.max-1].text	
				})
				
				
			}
		}
		
	}

	$scope.updatetext= function(){
		$timeout(function(){
			$scope.contentList[$scope.page.current-1].text = $scope.content
			$scope.contentList.$save($scope.contentList[$scope.page.current-1])
		},  500)
		
	}
	

	
	$scope.contentList.$loaded(function(){
		if($scope.contentList.length==0){
			$scope.contentList.$add({text: "New paper"})
		}
		$scope.content = $scope.contentList[0].text
		$scope.page.max = $scope.contentList.length
	})



})
