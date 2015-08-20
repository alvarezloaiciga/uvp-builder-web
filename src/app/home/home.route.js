(function() {
  'use strict';

  angular.module('uvpBuilderWeb.home')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
  }
})();
