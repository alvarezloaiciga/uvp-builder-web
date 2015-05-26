(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var VentureHacks = function () {
      this.industryExample = '';
      this.attribute = '';
      this.example = 'Jaskr.com: A smart flip of Quora';
    };

    VentureHacks.prototype.template = function () {
      return this.industryExample + ' for ' + this.attribute;
    };

  MethodsService.add('VentureHacks', VentureHacks);
  }
})();
