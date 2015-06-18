(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .factory('MethodsService', methodsService);

  function methodsService() {
    var service = {
      methods: [],
      getMethod: getMethod,
      set: set
    };

    return service;

    function getMethod(method) {
      var Method = null;
      if (typeof method === 'string') {
        for (var i = 0; i < this.methods.length; i++) {
          if (this.methods[i].slug === method) {
            Method = this.methods[i];
          }
        }
      }
      else if (typeof method === 'number' && this.methods[method]) {
        Method = this.methods[method];
      }
      if(Method !== null){
        return Method;
      } else {
        throw new Error('Invalid method: ' + method);
      }

    }

    function set(methods) {
      this.methods = methods;
    }
  }
})();
