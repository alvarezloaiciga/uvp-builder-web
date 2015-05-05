(function() {
  'use strict';

  angular.module('uvpBuilderWeb.home', ['ui.router'])
    .config(function ($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/home/home.html',
          controller: 'HomeController',
        })});
})();
