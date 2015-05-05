(function() {
  'use strict';

  angular.module('uvpBuilderWeb.home', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/home/home.html',
          controller: 'HomeController'
        });

      $urlRouterProvider.otherwise('/');
    });
})();
