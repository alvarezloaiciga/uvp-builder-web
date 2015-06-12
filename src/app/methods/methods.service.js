(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .factory('MethodsService', methodsService);

  methodsService.$inject=['$http'];

  function methodsService($http) {
    var service = {
      methods: {},
      getMethod: getMethod,
      //add: add
    };
    $http.get('/app/methods/methods.json')
    .success(function(data) {
    service.methods = data.methods;
  });


    return service;

    function getMethod(method) {
      var Method = this.methods[method];

      if (Method && typeof Method === 'function') {
        return new Method();
      } else {
        throw new Error('Invalid method: ' + method);
      }
    }

    /*function add(name, method) {
      this.methods[name] = method;
    }*/
  }
})();
