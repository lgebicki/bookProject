angular.module("bookapp").controller("Step3Ctrl", function($scope, stepsdata, $state) {

    $scope.steps.set(3)

    console.log(stepsdata)
    $scope.type = stepsdata.step2
    $scope.title = 'random title album'

    $scope.authors = [
        {
            name: "new author",
            init: "initials",
            surname: "surname"
        }
    ]

    $scope.addAuthor = function(){
        $scope.authors.unshift({
             name: "new author",
            init: "initials",
            surname: "surname"
        })
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
