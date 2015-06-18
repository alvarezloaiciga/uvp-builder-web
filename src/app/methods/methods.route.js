(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('method', {
        abstract: true,
        url: '/method',
        templateUrl: 'app/methods/method.html',
        controller: 'MethodController',
        controllerAs: 'ctrl'
      })
      .state('method.form', {
        url: '/:slug',
        templateUrl: 'app/methods/form.html',
        controller: 'FormController',
        controllerAs: 'form'
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
