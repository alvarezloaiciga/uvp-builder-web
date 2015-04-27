'use strict';

angular.module('uvpBuilderWeb', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'mm.foundation'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state ('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
      })
      .state ('geoff-moores', {
        url: '/method/geoff-moores',
        templateUrl: 'app/forms/geoff-moores.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl'
      })
      .state ('steve-blanks',{
        url: '/method/steve-blanks',
        templateUrl: 'app/forms/steve-blanks.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl'
      })
      .state ('david-cowans',{
        url: '/method/david-cowans',
        templateUrl: 'app/forms/david-cowans.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl'
      })
      .state ('elevator-pitch',{
        url: '/method/elevator-pitch',
        templateUrl: 'app/forms/elevator-pitch.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl'
      })
      .state ('minto-pyramid',{
        url: '/method/minto-pyramid',
        templateUrl: 'app/forms/minto-pyramid.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
