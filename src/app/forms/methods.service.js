(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb')
    .service('MethodsService', methodsService);

  function methodsService() {
    this.getMethod = function (method) {
      var Method = window.methods[method];

      if (Method && typeof Method === 'function') {
        return new Method();
      } else {
        throw new Error('Invalid method: ' + method);
      }
    };
  }

})();
