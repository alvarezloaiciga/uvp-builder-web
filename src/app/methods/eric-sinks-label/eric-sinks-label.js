(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var EricSinksLabel = function () {
      this.what = '';
    };

    EricSinksLabel.prototype.template = function () {
      return this.what;
    };

    MethodsService.add('EricSinksLabel', EricSinksLabel);
  }
})();
