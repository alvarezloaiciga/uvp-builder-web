'use strict';

angular.module('uvpBuilderWeb', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'mm.foundation'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
      })
      .state('geoff-moores', {
        url: '/method/geoff-moores',
        templateUrl: 'app/forms/geoff-moores.html',
        controller: 'GeoffMooresController',
        controllerAs: 'ctrl'
      })
      .state ('steve-blanks',{
        url: '/method/steve-blanks',
        templateUrl: 'app/forms/steve-blanks.html',
        controller: 'SteveBlanksController',
        controllerAs: 'ctrl'
      })
      .state ('david-cowans',{
        url: '/method/david-cowans',
        templateUrl: 'app/forms/david-cowans.html',
        controller: 'DavidCowansController',
        controllerAs: 'ctrl'
      })
      .state ('elevator-pitch',{
        url: '/method/elevator-pitch',
        templateUrl: 'app/forms/elevator-pitch.html',
        controller: 'ElevatorPitchController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
