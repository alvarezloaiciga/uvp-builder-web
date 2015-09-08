(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$mixpanel', 'LanguageService', 'MethodsService'];

  function HomeController($mixpanel, MethodsService) {
    $mixpanel.track('Page view');
    var vm = this;
    vm.setLanguage = setLanguage;

    function setLanguage(language) {
      MethodsService.setLanguage(language);
    }
  }
})();
