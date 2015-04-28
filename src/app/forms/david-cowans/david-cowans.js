(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.forms')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var DavidCowans = function () {
      this.problem = '';
      this.product = '';
      this.differentiation = '';
      this.pedigree = '';
    };

    DavidCowans.prototype.template = function () {
      return this.problem + ' ' + this.product + ' ' + this.differentiation + ' ' + this.pedigree;
    };

    MethodsService.add('DavidCowans', DavidCowans);
  }
})();
