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
        controller: 'FormController',
        controllerAs: 'ctrl'
      })
      .state ('steve-blanks',{
        url: '/method/steve-blanks',
        templateUrl: 'app/forms/steve-blanks.html',
        controller: 'Form2Controller',
        controllerAs: 'ctrl'
      });



    $urlRouterProvider.otherwise('/');


  })
;
