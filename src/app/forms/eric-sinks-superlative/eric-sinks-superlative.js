(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.forms')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var EricSinksSuperlative = function () {
      this.why = '';
    };

    EricSinksSuperlative.prototype.template = function () {
      return this.why;
    };

    MethodsService.add('EricSinksSuperlative', EricSinksSuperlative);
  }
})();
