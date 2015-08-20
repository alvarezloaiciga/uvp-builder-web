(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$mixpanel', 'LanguageService'];

  function HomeController($mixpanel, LanguageService) {
    $mixpanel.track('Page view');
    var vm = this;
    vm.language = LanguageService.getLanguage();

    vm.isActiveLanguage = isActiveLanguage;
    vm.setLanguage = setLanguage;

    function isActiveLanguage(language) {
      return language === vm.language;
    }

    function setLanguage(language) {
      LanguageService.setLanguage(language);
      vm.language = LanguageService.getLanguage();
    }
  }
})();
