(function() {
    'use strict';

    angular
        .module('uvpBuilderWeb.language')
        .factory('LanguageService', LanguageFactory);

    function LanguageFactory() {
      var vm = this;

      vm.languages = {
        EN: 'en-US',
        ES: 'es-ES'
      }

      vm.currentLanguage = getKey(vm.languages, 'en-US');

      var LanguageService = {
        getLanguage: getLanguage,
        setLanguage: setLanguage
      };

      return LanguageService;

      function getLanguage() {
        return vm.currentLanguage;
      }

      function getKey(map, value){
        for(var key in map){
          if(map[key] == value){
            return key;
          }
        }
        return null;
      };

      function setLanguage(languageKey) {
        vm.currentLanguage = languageKey;
      }
    }

})();
