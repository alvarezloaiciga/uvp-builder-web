(function(){
  'use strict';

  angular.module('uvpBuilderWeb.language')
    .directive('uvpLanguageSelector', languageSelectorDirective);

  function languageSelectorDirective(){
    return {
      restrict: 'EA',
      templateUrl: 'app/language/language-selector.directive.html',
      controller: LanguageSelectorController,
      controllerAs: 'LSCtrl',
      bindToController: true
    };
  }

  LanguageSelectorController.$inject = ['LanguageService'];

  function LanguageSelectorController(LanguageService){
    var vm = this;

    vm.currentLocaleDisplayName = LanguageService.getLocaleDisplayName();
    vm.localesDisplayNames = LanguageService.getLocalesDisplayNames();
    vm.visible = vm.localesDisplayNames && vm.localesDisplayNames.length > 1;

    vm.changeLanguage = changeLanguage;

    function changeLanguage(locale){
      LanguageService.setLocaleByDisplayName(locale);
    }
  }
})();
