(function(){
  'use strict';

  var app = angular.module('uvpBuilderWeb', [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngResource',
      'ui.router',
      'mm.foundation'
  ]);

  app.config(function ($stateProvider, $urlRouterProvider) {
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
      });

      $urlRouterProvider.otherwise('/');
  });
})();
