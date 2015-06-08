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
      })
      .state('GeoffMoores', {
        url: '/geoff-moores',
        templateUrl: 'app/methods/geoff-moores/geoff-moores.html',
        parent: 'method',
        controller: 'MethodsController',
        controllerAs: 'ctrl'
      })
      .state('SteveBlanks', {
        url: '/steve-blanks',
        templateUrl: 'app/methods/steve-blanks/steve-blanks.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('DavidCowans', {
        url: '/david-cowans',
        templateUrl: 'app/methods/david-cowans/david-cowans.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('ElevatorPitch', {
        url: '/elevator-pitch',
        templateUrl: 'app/methods/elevator-pitch/elevator-pitch.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('MintoPyramid', {
        url: '/minto-pyramid',
        templateUrl: 'app/methods/minto-pyramid/minto-pyramid.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('ClayChristensen', {
        url: '/clay-christensen',
        templateUrl: 'app/methods/clay-christensen/clay-christensen.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('EricSinksSuperlative', {
        url: '/eric-sinks-superlative',
        templateUrl: 'app/methods/eric-sinks-superlative/eric-sinks-superlative.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('EricSinksLabel', {
        url: '/eric-sinks-label',
        templateUrl: 'app/methods/eric-sinks-label/eric-sinks-label.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('SimonSineks', {
        url: '/simon-sineks',
        templateUrl: 'app/methods/simon-sineks/simon-sineks.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('ZagFormat', {
        url: '/zag-format',
        templateUrl: 'app/methods/zag-format/zag-format.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('JustWriteIt', {
        url: '/just-write-it',
        templateUrl: 'app/methods/just-write-it/just-write-it.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('TheQuestion', {
        url: '/the-question',
        templateUrl: 'app/methods/the-question/the-question.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('DaveMcClures', {
        url: '/dave-mcclures',
        templateUrl: 'app/methods/dave-mcclures/dave-mcclures.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('VentureHacks', {
        url: '/venture-hacks',
        templateUrl: 'app/methods/venture-hacks/venture-hacks.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('VlaskovitsAndCoopers', {
        url: '/vlaskovits-and-coopers',
        templateUrl: 'app/methods/vlaskovits-and-coopers/vlaskovits-and-coopers.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('ThreeWords', {
        url: '/3-words',
        templateUrl: 'app/methods/3-words/3-words.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      });
  }
})();
