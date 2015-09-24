(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .factory('MethodsService', methodsService);

  methodsService.$inject = ['$http', 'API_URL'];

  function methodsService($http, API_URL) {
    var service = {
      methods: [],
      getMethod: getMethod,
      set: set,
      setMethods: setMethods
    };

    return service;

    function getMethod(method) {
      var Method = null;
      if (typeof method === 'string' && isNaN(method)) {
        for (var i = 0; i < this.methods.length; i++) {
          if (this.methods[i].slug === method) {
            Method = this.methods[i];
          }
        }
      }
      else if (typeof method === 'string' && !isNaN(method) && this.methods[parseInt(method)]) {
        Method = this.methods[parseInt(method)];
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
      service.methods = methods;
    }

    function setMethods(Language){
      $http.get(API_URL + '/methods/lang/' + Language )
        .success(function(data) {
          set(data);
        })
        .error(function(data) {
          throw new Error( data || 'Unknown/Unsupported language');
        });
    }
  }
})();
