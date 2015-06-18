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
      for (var i=0; i<this.methods.length; i++ ) {
        if (this.methods[i].slug === method){
          Method = this.methods[i];
        }
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
