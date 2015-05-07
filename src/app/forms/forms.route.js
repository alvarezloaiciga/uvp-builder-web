(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.forms')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('method', {
        url: '/method',
        templateUrl: 'app/forms/method.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl'
      })
      .state('GeoffMoores', {
        url: '/geoff-moores',
        templateUrl: 'app/forms/geoff-moores/geoff-moores.html',
        parent: 'method',
        controller: 'MethodsController',
        controllerAs: 'ctrl'
      })
      .state('SteveBlanks', {
        url: '/steve-blanks',
        templateUrl: 'app/forms/steve-blanks/steve-blanks.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('DavidCowans', {
        url: '/david-cowans',
        templateUrl: 'app/forms/david-cowans/david-cowans.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('ElevatorPitch', {
        url: '/elevator-pitch',
        templateUrl: 'app/forms/elevator-pitch/elevator-pitch.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('MintoPyramid', {
        url: '/minto-pyramid',
        templateUrl: 'app/forms/minto-pyramid/minto-pyramid.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('ClayChristensen', {
        url: '/clay-christensen',
        templateUrl: 'app/forms/clay-christensen/clay-christensen.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('EricSinksSuperlative', {
        url: '/eric-sinks-superlative',
        templateUrl: 'app/forms/eric-sinks-superlative/eric-sinks-superlative.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('EricSinksLabel', {
        url: '/eric-sinks-label',
        templateUrl: 'app/forms/eric-sinks-label/eric-sinks-label.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('SimonSineks', {
        url: '/simon-sineks',
        templateUrl: 'app/forms/simon-sineks/simon-sineks.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('ZagFormat', {
        url: '/zag-format',
        templateUrl: 'app/forms/zag-format/zag-format.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('JustWriteIt', {
        url: '/just-write-it',
        templateUrl: 'app/forms/just-write-it/just-write-it.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('TheQuestion', {
        url: '/the-question',
        templateUrl: 'app/forms/the-question/the-question.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('DaveMcClures', {
        url: '/dave-mcclures',
        templateUrl: 'app/forms/dave-mcclures/dave-mcclures.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('VentureHacks', {
        url: '/venture-hacks',
        templateUrl: 'app/forms/venture-hacks/venture-hacks.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('VlaskovitsAndCoopers', {
        url: '/vlaskovits-and-coopers',
        templateUrl: 'app/forms/vlaskovits-and-coopers/vlaskovits-and-coopers.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      })
      .state('ThreeWords', {
        url: '/3-words',
        templateUrl: 'app/forms/3-words/3-words.html',
        controller: 'MethodsController',
        controllerAs: 'ctrl',
        parent: 'method'
      });
  }
})();
