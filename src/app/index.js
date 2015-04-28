(function () {
  'use strict';

  var app = angular.module('uvpBuilderWeb', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngResource',
    'ui.router',
    'mm.foundation',
    'uvpBuilderWeb.forms',
    'uvpBuilderWeb.home']);

  app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
      })
      .state('GeoffMoores', {
        url: '/method/geoff-moores',
        templateUrl: 'app/forms/geoff-moores/geoff-moores.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl'
      })
      .state('SteveBlanks', {
        url: '/method/steve-blanks',
        templateUrl: 'app/forms/steve-blanks/steve-blanks.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl'
      })
      .state('DavidCowans', {
        url: '/method/david-cowans',
        templateUrl: 'app/forms/david-cowans/david-cowans.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl'
      })
      .state('ElevatorPitch', {
        url: '/method/elevator-pitch',
        templateUrl: 'app/forms/elevator-pitch/elevator-pitch.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl'
      })
      .state('MintoPyramid', {
        url: '/method/minto-pyramid',
        templateUrl: 'app/forms/minto-pyramid/minto-pyramid.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl'
      })
      .state('ClayChristensen', {
        url: '/method/clay-christensen',
        templateUrl: 'app/forms/clay-christensen/clay-christensen.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl'
      })
      .state('EricSinksSuperlative', {
        url: '/method/eric-sinks-superlative',
        templateUrl: 'app/forms/eric-sinks-superlative/eric-sinks-superlative.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl'
      })
      .state('EricSinksLabel', {
        url: '/method/eric-sinks-label',
        templateUrl: 'app/forms/eric-sinks-label/eric-sinks-label.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
  });
})();
