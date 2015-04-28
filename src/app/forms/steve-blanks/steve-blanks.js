(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.forms')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var SteveBlanks = function () {
      this.customer = '';
      this.product = '';
      this.objective = '';
    };

    SteveBlanks.prototype.template = function () {
      return 'We help ' + this.customer + ' do ' + this.objective + ' doing ' + this.product;
    };

    MethodsService.add('SteveBlanks', SteveBlanks);
  }
})();
