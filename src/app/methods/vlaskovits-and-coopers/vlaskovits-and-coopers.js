(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var VlaskovitsAndCoopers = function () {
      this.customer = '';
      this.problem = '';
      this.solution = '';
    };

    VlaskovitsAndCoopers.prototype.template = function () {
      return this.customer + '. ' + this.problem + '. ' + this.solution;
    };

  MethodsService.add('VlaskovitsAndCoopers', VlaskovitsAndCoopers);
  }
})();
