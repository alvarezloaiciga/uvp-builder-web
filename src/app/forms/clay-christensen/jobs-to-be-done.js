(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var ClayChristensen = function () {
      this.verb = '';
      this.action = '';
      this.identifier = '';
    };

    ClayChristensen.prototype.template = function () {
      return this.verb + " " + this.action + " " + this.identifier;
    };

  MethodsService.add('ClayChristensen', ClayChristensen);
  }
})();
