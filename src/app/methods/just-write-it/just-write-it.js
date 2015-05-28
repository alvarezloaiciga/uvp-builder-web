(function() {

  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService', 'locale' ];

  function addMethod(MethodsService, locale) {
    locale.ready('justWriteIt').then(function() {
      var JustWriteIt = function () {
        this.prose = '';
        this.example = locale.getString('justWriteIt.example');
      };

      JustWriteIt.prototype.template = function () {
        return this.prose;
      };

      MethodsService.add('JustWriteIt', JustWriteIt);
    });
  }
})();

