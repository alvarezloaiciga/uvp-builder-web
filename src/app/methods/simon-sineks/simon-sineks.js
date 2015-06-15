(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var SimonSineks = function () {
      this.why = '';
      this.how = '';
      this.importance = '';
    };

    SimonSineks.prototype.template = function () {
      return this.why + '. ' + this.how + '. ' + this.importance + '.';
    };

    MethodsService.add('SimonSineks', new SimonSineks());
  }
})();
