(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .factory('MethodsService', methodsService);

  methodsService.$inject = ['$http'];

  function methodsService($http) {
    var service = {
      methods: [],
      getMethod: getMethod,
      set: set,
      setLanguage: setLanguage
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

    function setLanguage(Language){
      var methodFileURL = '';
      switch(Language){
        case 'EN':
          methodFileURL = '/app/methods/methods.json'
          break;
        case 'ES':
          methodFileURL = '/app/methods/metodos.json'
          break;
        default:
          methodFileURL = '/app/methods/methods.json'
          break;
      }
      requestForMethods(methodFileURL);
    }

    function requestForMethods(fileURL){
      $http.get(fileURL)
        .success(function(data) {
          set(data.methods);
        }).
        error(function(data) {
          throw new Error( data || 'Request failed');
        });
    }
  }
})();
