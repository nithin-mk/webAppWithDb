var app = angular.module('DemoApp', ['ui.router', 'satellizer']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'partials/home.tpl.html'
    })
    .state('secret', {
      url: '/secret',
      templateUrl: 'partials/secret.tpl.html',
      controller: 'SecretCtrl',
      data: {requiredLogin: true}
    })
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.tpl.html',
      controller: 'LoginSignupCtrl'
    })
    .state('issues', {
      url: '/issues',
      templateUrl: 'partials/issues.tpl.html',
      controller: 'IssuesCtrl',
      data: {requiredLogin: true}
    })
    .state('comments', {
      url: '/comments/:owner/:repo/:number',
      templateUrl: 'partials/comments.tpl.html',
      controller: 'CommentsCtrl',
      data: {requiredLogin: true}
    })
    .state('chart', {
      url: '/chart',
      templateUrl: 'partials/chart.tpl.html',
      controller: 'ChartCtrl',
      data: {requiredLogin: true}
    });

  $urlRouterProvider.otherwise('/home');
});

app.run(function ($rootScope, $state, $auth) {
  $rootScope.$on('$stateChangeStart',
    function (event, toState) {
      var requiredLogin = false;
      if (toState.data && toState.data.requiredLogin)
        requiredLogin = true;

      if (requiredLogin && !$auth.isAuthenticated()) {
        event.preventDefault();
        $state.go('login');
      }
    });
});
