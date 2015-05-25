(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var SteveBlanks = function () {
      this.customer = '';
      this.product = '';
      this.objective = '';
      this.example = 'We help digital journalist to discover people questions about specific topics doing powerful interviews';
    };

    SteveBlanks.prototype.template = function () {
      return 'We help ' + this.customer + ' to ' + this.objective + ' doing ' + this.product;
    };

    MethodsService.add('SteveBlanks', SteveBlanks);
  }
})();
