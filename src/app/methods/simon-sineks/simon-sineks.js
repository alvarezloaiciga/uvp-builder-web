(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService', 'locale' ];

  function addMethod(MethodsService, locale) {
    var SimonSineks = function () {
      this.why = '';
      this.how = '';
      this.importance = '';
      this.example = locale.getString('simonSineks.example');
    };

    SimonSineks.prototype.template = function () {
      return this.why + '. ' + this.how + '. ' + this.importance + '.';
    };

    MethodsService.add('SimonSineks', SimonSineks);
  }
})();
