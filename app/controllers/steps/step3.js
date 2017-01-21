angular.module("bookapp").controller("Step3Ctrl", function($scope, stepsdata, $state, $firebaseAuth, $firebaseObject, $firebaseArray) {

    $scope.steps.set(3)

    console.log(stepsdata)
    $scope.type = stepsdata.step2
    $scope.title = 'random title album'

    $scope.loading = true
    $scope.data = {}
    $scope.authObj = $firebaseAuth();
    var firebaseUser = $scope.authObj.$getAuth();
    // basic reference
    var ref = firebase.database().ref(firebaseUser.uid);
    //  reference to the list of items
    var listref = ref.child("list")

    var obj = $firebaseObject(ref);
    var list = $firebaseArray(listref);

    $scope.list = list;

     obj.$bindTo($scope, "data").then(function() {
      //here we got server data
      $scope.loading = false
      console.log($scope.data)

      // $scope.data.ournewdata = "some random album title";  // will be saved to the database
    });

    // $scope.addit = function(){
    //    list.$add({ text: "bar" })
    // }

    // $scope.authors = [
    //     {
    //         name: "new author",
    //         init: "initials",
    //         surname: "surname"
    //     }
    // ]
    $scope.authors = []

    $scope.addAuthor = function(){
        list.$add({ 
            name: "new author",
            init: "initials",
            surname: "surname"
         })
        // $scope.authors.unshift({
        //      name: "new author",
        //     init: "initials",
        //     surname: "surname"
        // })
    }

    $scope.getCitation = function(){
        console.log($scope.title)
        stepsdata.title = $scope.title
        stepsdata.publisher = $scope.publisher
        stepsdata.place = $scope.place
        stepsdata.authors = $scope.authors
        var finalname = ""
        $scope.authors.forEach((item)=>{
            finalname += item.name + ', '
        })
        $scope.authors.forEach((item)=>{
            finalname += item.surname + ', '
        })
        finalname += '.'
        stepsdata.allauthors = finalname
   
    
        $state.go('app.steps.four')
    }

})
