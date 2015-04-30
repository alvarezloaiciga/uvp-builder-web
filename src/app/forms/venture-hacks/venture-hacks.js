(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.forms')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var VentureHacks = function () {
      this.example = '';
      this.attribute = '';
    };

    VentureHacks.prototype.template = function () {
      return this.example + ' for/of ' + this.attribute;
    };

  MethodsService.add('VentureHacks', VentureHacks);
  }
})();
