(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .factory('MethodsService', methodsService);

  methodsService.$inject=['$http'];

  function methodsService($http) {
    var service = {
      methods: [],
      getMethod: getMethod,
      add: add
    };
    $http.get('/app/methods/methods.json')
    .success(function(data) {
    service.methods = data.methods;
  }).
    error(function(data) {
      throw new Error( data || 'Request failed');
  });


    return service;

    function getMethod(method) {
      var Method = null;
      for (var i=0; i<this.methods.length; i++ ) {
        if (this.methods[i].slug === method){
          Method = this.methods[i];
        } 
      }
      if(Method!=null){
        return Method;
      } else {
        throw new Error('Invalid method: ' + method);
      }

    }

    function add(name, method) {
      this.methods[name] = method;
    }
  }
})();
