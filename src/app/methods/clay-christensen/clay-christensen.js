(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var ClayChristensen = function () {
      this.verb = '';
      this.action = '';
      this.identifier = '';
      this.example = 'Publish the Personal Opinion Answers from the source';
    };

    ClayChristensen.prototype.template = function () {
      return this.verb + ' ' + this.action + ' ' + this.identifier;
    };

  MethodsService.add('ClayChristensen', ClayChristensen);
  }
})();
