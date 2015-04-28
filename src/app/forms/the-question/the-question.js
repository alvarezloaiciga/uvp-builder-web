(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.forms')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var TheQuestion = function () {
      this.question = '';
    };

    TheQuestion.prototype.template = function () {
      return this.question;
    };

    MethodsService.add('TheQuestion', TheQuestion);
  }
})();
