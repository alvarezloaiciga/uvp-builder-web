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

  LanguageSelectorController.$inject = ['LanguageService', 'MethodsService', '$state'];

  function LanguageSelectorController(LanguageService, MethodsService, $state){
    var vm = this;

    vm.currentLocaleDisplayName = LanguageService.getLocaleDisplayName();
    vm.localesDisplayNames = LanguageService.getLocalesDisplayNames();
    vm.visible = vm.localesDisplayNames && vm.localesDisplayNames.length > 1;

    vm.changeLanguage = changeLanguage;
    vm.isActive = isActive;

    function changeLanguage(locale){
      LanguageService.setLocaleByDisplayName(locale);
      MethodsService.setMethods(LanguageService.getCurrentLocale());
      $state.reload();
    }

    function isActive(language){
      setLocaleIfUndefined();
      return vm.currentLocaleDisplayName === language;
    }

    function setLocaleIfUndefined(){
      if(!vm.currentLocaleDisplayName)
        vm.currentLocaleDisplayName = 'English';
    }
  }
})();
