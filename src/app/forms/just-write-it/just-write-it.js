(function() {

  'use strict';

  angular
    .module('uvpBuilderWeb.forms')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var JustWriteIt = function () {
      this.prose = '';
    };

    JustWriteIt.prototype.template = function () {
      return this.prose;
    };

    MethodsService.add('JustWriteIt', JustWriteIt);
  }
})();

