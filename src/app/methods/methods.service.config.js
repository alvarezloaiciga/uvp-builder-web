(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(setMethods);

  setMethods.$inject = ['MethodsService','$translate'];

  function setMethods(MethodsService, $translate) {
    MethodsService.setMethods($translate.proposedLanguage());
  }

})();
