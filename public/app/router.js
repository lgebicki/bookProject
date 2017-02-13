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
    },
    resolve: {
      user: function($firebaseAuth){
        var authObj = $firebaseAuth();
        return authObj.$waitForSignIn()
      }
    }
  })
  $stateProvider.state('app.welcome',{
    url: '/welcome',
    abstract: false,
    views: {
      app: {templateUrl: "views/welcome.html", controller: 'WelcomeCtrl'}
    },
    resolve: {
      user: function($firebaseAuth){
        var authObj = $firebaseAuth();
        return authObj.$waitForSignIn()
      }
    }
  })
   $stateProvider.state('app.steps',{
    url: '',
    abstract: true,
    views: {
      app: {templateUrl: "views/steps/main.html", controller: 'StepMainCtrl'}
    },
    resolve: {
      user: function($firebaseAuth){
        var authObj = $firebaseAuth();
        return authObj.$waitForSignIn()
      }
    }
  })
  $stateProvider.state('app.steps.one',{
    url: '/step1?id',
    abstract: false,
    views: {
      steps: {templateUrl: "views/steps/step1.html", controller: 'Step1Ctrl'}
    },
    resolve: {
      user: function($firebaseAuth){
        var authObj = $firebaseAuth();
        return authObj.$waitForSignIn()
      }
    }
  })
  $stateProvider.state('app.steps.two',{
    url: '/step2?id',
    abstract: false,
    views: {
      steps: {templateUrl: "views/steps/step2.html", controller: 'Step2Ctrl'}
    },
    resolve: {
      user: function($firebaseAuth){
        var authObj = $firebaseAuth();
        return authObj.$waitForSignIn()
      }
    }
  })
  $stateProvider.state('app.steps.three',{
    url: '/step3?id',
    abstract: false,
    views: {
      steps: {templateUrl: "views/steps/step3.html", controller: 'Step3Ctrl'}
    },
    resolve: {
      user: function($firebaseAuth){
        var authObj = $firebaseAuth();
        return authObj.$waitForSignIn()
      }
    }
  })
  $stateProvider.state('app.steps.four',{
    url: '/step4?id',
    abstract: false,
    views: {
      steps: {templateUrl: "views/steps/step4.html", controller: 'Step4Ctrl'}
    },
    resolve: {
      user: function($firebaseAuth){
        var authObj = $firebaseAuth();
        return authObj.$waitForSignIn()
      }
    }
  })
   $stateProvider.state('app.steps.five',{
    url: '/step5?id',
    abstract: false,
    views: {
      steps: {templateUrl: "views/steps/step5.html", controller: 'Step5Ctrl'}
    },
    resolve: {
      user: function($firebaseAuth){
        var authObj = $firebaseAuth();
        return authObj.$waitForSignIn()
      }
    }
  })
   $stateProvider.state('app.finalPage',{
    url: '/final?id',
    abstract: false,
    views: {
      app: {templateUrl: "views/finalPage.html", controller: 'FinalCtrl'}
    },
    resolve: {
      user: function($firebaseAuth){
        var authObj = $firebaseAuth();
        return authObj.$waitForSignIn()
      }
    }
  })
   $stateProvider.state('app.projects',{
    url: '/projects',
    abstract: false,
    views: {
      app: {templateUrl: "views/projects.html", controller: 'ProjectsCtrl'}
    },
    resolve: {
      user: function($firebaseAuth){
        var authObj = $firebaseAuth();
        return authObj.$waitForSignIn()
      }
    }
  })
   $stateProvider.state('app.trash',{
    url: '/trash?id',
    abstract: false,
    views: {
      app: {templateUrl: "views/trash.html", controller: 'TrashCtrl'}
    },
    resolve: {
      user: function($firebaseAuth){
        var authObj = $firebaseAuth();
        return authObj.$waitForSignIn()
      }
    }
  })
    $stateProvider.state('app.toDoList',{
    url: '/todolist?id',
    abstract: false,
    views: {
      app: {templateUrl: "views/todolist.html", controller: 'todoCtrl'}
    },
    resolve: {
      user: function($firebaseAuth){
        var authObj = $firebaseAuth();
        return authObj.$waitForSignIn()
      }
    }
  })
    $stateProvider.state('app.topicThesis',{
    url: '/topicThesis?id',
    abstract: false,
    views: {
      app: {templateUrl: "views/topicThesis.html", controller: 'TopicThesisCtrl'}
    },
    resolve: {
      user: function($firebaseAuth){
        var authObj = $firebaseAuth();
        return authObj.$waitForSignIn()
      }
    }
  })
    $stateProvider.state('app.outline',{
    url: '/outline?id',
    abstract: false,
    views: {
      app: {templateUrl: "views/outline.html", controller: 'OutlineCtrl'}
    },
    resolve: {
      user: function($firebaseAuth){
        var authObj = $firebaseAuth();
        return authObj.$waitForSignIn()
      }
    }
  })
    $stateProvider.state('app.writePaper',{
    url: '/writePaper?id',
    abstract: false,
    views: {
      app: {templateUrl: "views/writePaper.html", controller: 'WritePaperCtrl'}
    },
    resolve: {
      user: function($firebaseAuth){
        var authObj = $firebaseAuth();
        return authObj.$waitForSignIn()
      }
    }
  })

})
