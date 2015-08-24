(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(setMethods);

  setMethods.$inject = ['MethodsService', '$http', 'LanguageService'];

  function setMethods(MethodsService, $http, LanguageService) {
    $http.get('/app/methods/methods.json')
      .success(function(data) {
        MethodsService.set(data.methods);
      }).
      error(function(data) {
        throw new Error( data || 'Request failed');
      });
  }

})();
