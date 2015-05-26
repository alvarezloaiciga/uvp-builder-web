(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var GeoffMoores = function () {
      this.customer = '';
      this.need = '';
      this.product = '';
      this.category = '';
      this.benefit = '';
      this.example = 'Jaskr.com: For digital journalist who struggle to discover the people questions ' +
        'our product is a publisher tool that creates powerful interviews to collect people questions';
    };

    GeoffMoores.prototype.template = function () {
      return 'For ' + this.customer + ' who ' + this.need + ' our ' + this.product + ' is ' + this.category + ' that ' + this.benefit;
    };

    MethodsService.add('GeoffMoores', GeoffMoores);
  }
})();
