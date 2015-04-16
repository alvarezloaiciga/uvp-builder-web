'use strict';

angular.module('uvpBuilderWeb', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'mm.foundation'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
      });

    $urlRouterProvider.otherwise('/');
  })
;
