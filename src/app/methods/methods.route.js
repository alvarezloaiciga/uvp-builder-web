(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('method', {
        url: '/method/:slug',
        templateUrl: 'app/methods/method.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl'
      })
      .state('share', {
        url: '/share/:uvp',
        templateUrl: 'app/methods/share.html',
        controller: function ($stateParams) {
          this.uvp = $stateParams.uvp;
        },
        controllerAs: 'ctrl'
      });
  }
})();
