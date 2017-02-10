angular.module("bookapp").controller("Step3Ctrl", function($scope, stepsdata, $state, $mdDialog, $http) {

    $scope.steps.set(3)


    $scope.type = stepsdata.step2
    $scope.page = ""
    $scope.year = ""
    $scope.place = ""
    $scope.publisher = ""
    $scope.title = ""
    $scope.citedText = ""

    $scope.loading = false
    $scope.data = {}
    $scope.list = [{
            name: "",
            init: "",
            surname: ""
         }]


    // //this is authentification stuff - user id , etc
    // $scope.authObj = $firebaseAuth();
    // var firebaseUser = $scope.authObj.$getAuth();


    // //
    // // basic reference
    // //
    // var ref = firebase.database().ref(firebaseUser.uid);
    // //  reference to the list of items
    // var listref = ref.child("list")


    // var obj = $firebaseObject(ref);
    // var list = $firebaseArray(listref);


    // $scope.list = list;

    //  obj.$bindTo($scope, "data").then(function() {
    //   //here we got server data
    //   $scope.loading = false
    //   console.log($scope.data)

    //   // $scope.data.ournewdata = "some random album title";  // will be saved to the database
    // });

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
        $scope.list.push({
            name: "",
            init: "",
            surname: ""
         })
        // $scope.authors.unshift({
        //      name: "new author",
        //     init: "initials",
        //     surname: "surname"
        // })
    }
    $scope.removeAuthor = function(){
        $scope.list.pop()
    }

// var obj = $firebaseObject(list);
// obj.$remove().then(function(remove) {
// // data has been deleted locally and in the database
// }, 

    $scope.getCitation = function(){
        console.log($scope.title)
        stepsdata.title = $scope.title
        stepsdata.publisher = $scope.publisher
        stepsdata.place = $scope.place
        
        stepsdata.year = $scope.year
        stepsdata.authors = $scope.list
        stepsdata.title = $scope.title
        stepsdata.citedText = $scope.citedText

        
        stepsdata.mystuff = $scope.searchQuery
        stepsdata.place = $scope.place

        if ($scope.endPage){
            stepsdata.endPage = true
            stepsdata.startpage = $scope.startpage
            stepsdata.lastpage = $scope.lastpage
        } else {
            stepsdata.page = $scope.page
        }

        // stepsdata.authorSurname = $scope.authorSurname
        // stepsdata.options2 = $scope.input2model

        // stepsdata.step3data = {
        //     option1:  $scope.input1model,
        //     option2:  $scope.input2model,
        // }        

        if ($state.params.id){
          $state.go('app.steps.four',{id: $state.params.id})
        } else {
          $state.go('app.steps.four')
        }

    }
    $scope.showDialog = function(ev){
        

         $http({
            method: 'GET',
            url: 'https://wordcat.herokuapp.com/?book=' + $scope.searchQuery
          }).then(function successCallback(response) {
            console.log('yes')
            
            //
            var x2js = new X2JS();
            var finaldata = x2js.xml_str2json(response.data);
            
            $scope.booklist =  finaldata.feed.entry.map(function(item, index){
                return {
                    title: item.title,
                    author: item.author.name
                }
            })
             $mdDialog.show({
              scope: $scope,
              preserveScope: true,
              templateUrl: 'views/dialogs/search.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:true,
              fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function(answer) {
            }, function() {
            });              

            }, function errorCallback(response) {
              console.log(response)
            });
        

     }
})
