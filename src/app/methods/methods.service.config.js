(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(setMethods);

  setMethods.$inject = ['MethodsService'];

  function setMethods(MethodsService) {
    MethodsService.setLanguage('EN');
  }

})();
