(function() {

  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var JustWriteIt = function () {
      this.prose = '';
      this.example = 'Jaskr.com: Avoid rummors and unclear information with a better publisher network';
    };

    JustWriteIt.prototype.template = function () {
      return this.prose;
    };

    MethodsService.add('JustWriteIt', JustWriteIt);
  }
})();

