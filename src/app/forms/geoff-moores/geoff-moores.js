(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var GeoffMoores = function () {
      this.customer = '';
      this.need = '';
      this.product = '';
      this.category = '';
      this.benefit = '';
    };

    GeoffMoores.prototype.template = function () {
      return 'For ' + this.customer + ' who ' + this.need + ' our ' + this.product + ' is ' + this.category + ' that ' + this.benefit;
    };

    MethodsService.add('GeoffMoores', GeoffMoores);
  }
})();
