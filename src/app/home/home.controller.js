(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$mixpanel'];

  function HomeController($mixpanel) {
    $mixpanel.track('Page view');
  }
})();
