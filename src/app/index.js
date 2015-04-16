'use strict';

angular.module('uvpBuilderWeb', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'mm.foundation'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
      })
      .state('geoff-moores-value-positioning-statement', {
        url: '/geoff-moores-value-positioning-statement',
        templateUrl: 'app/forms/geoff-moores-value-positioning-statement.html',
        controller: 'FormController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
