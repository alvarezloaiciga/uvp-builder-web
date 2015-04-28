(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb')
    .factory('MethodsService', methodsService);

  function methodsService() {
    var service = {
      methods: {},
      getMethod: getMethod,
      add: add
    };

    return service;

    function getMethod(method) {
      var Method = this.methods[method];

      if (Method && typeof Method === 'function') {
        return new Method();
      } else {
        throw new Error('Invalid method: ' + method);
      }
    }

    function add(name, method) {
      this.methods[name] = method;
    }
  }
})();
