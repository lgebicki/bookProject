angular.module("bookapp").config(function($stateProvider, $urlRouterProvider, $locationProvider){


  $locationProvider.html5Mode({enabled: true, requireBase: false})
  $urlRouterProvider.otherwise("/login");

  $stateProvider.state('login',{
    url: '/login',
    abstract: false,
    views: {
      root: {templateUrl: "views/login.html", controller: 'LoginCtrl'}
    }
  })
  $stateProvider.state('app',{
    url: '',
    abstract: true,
    views: {
      root: {templateUrl: "views/app.html", controller: 'AppCtrl'}
    }
  })
  $stateProvider.state('app.welcome',{
    url: '/welcome',
    abstract: false,
    views: {
      app: {templateUrl: "views/welcome.html", controller: 'WelcomeCtrl'}
    }
  })
   $stateProvider.state('app.steps',{
    url: '',
    abstract: true,
    views: {
      app: {templateUrl: "views/steps/main.html", controller: 'StepMainCtrl'}
    }
  })
  $stateProvider.state('app.steps.one',{
    url: '/step1?id',
    abstract: false,
    views: {
      steps: {templateUrl: "views/steps/step1.html", controller: 'Step1Ctrl'}
    }
  })
  $stateProvider.state('app.steps.two',{
    url: '/step2?id',
    abstract: false,
    views: {
      steps: {templateUrl: "views/steps/step2.html", controller: 'Step2Ctrl'}
    }
  })
  $stateProvider.state('app.steps.three',{
    url: '/step3?id',
    abstract: false,
    views: {
      steps: {templateUrl: "views/steps/step3.html", controller: 'Step3Ctrl'}
    }
  })
  $stateProvider.state('app.steps.four',{
    url: '/step4?id',
    abstract: false,
    views: {
      steps: {templateUrl: "views/steps/step4.html", controller: 'Step4Ctrl'}
    }
  })
   $stateProvider.state('app.steps.five',{
    url: '/step5?id',
    abstract: false,
    views: {
      steps: {templateUrl: "views/steps/step5.html", controller: 'Step5Ctrl'}
    }
  })
   $stateProvider.state('app.finalPage',{
    url: '/final?id',
    abstract: false,
    views: {
      app: {templateUrl: "views/finalPage.html", controller: 'FinalCtrl'}
    }
  })
   $stateProvider.state('app.projects',{
    url: '/projects',
    abstract: false,
    views: {
      app: {templateUrl: "views/projects.html", controller: 'ProjectsCtrl'}
    }
  })
   $stateProvider.state('app.trash',{
    url: '/trash?id',
    abstract: false,
    views: {
      app: {templateUrl: "views/trash.html", controller: 'TrashCtrl'}
    }
  })
    $stateProvider.state('app.toDoList',{
    url: '/todolist?id',
    abstract: false,
    views: {
      app: {templateUrl: "views/todolist.html", controller: 'todoCtrl'}
    }
  })
    $stateProvider.state('app.topicThesis',{
    url: '/topicThesis?id',
    abstract: false,
    views: {
      app: {templateUrl: "views/topicThesis.html", controller: 'TopicThesisCtrl'}
    }
  }) 
    $stateProvider.state('app.outline',{
    url: '/outline?id',
    abstract: false,
    views: {
      app: {templateUrl: "views/outline.html", controller: 'OutlineCtrl'}
    }
  })
    $stateProvider.state('app.writePaper',{
    url: '/writePaper?id',
    abstract: false,
    views: {
      app: {templateUrl: "views/writePaper.html", controller: 'WritePaperCtrl'}
    }
  })

})
