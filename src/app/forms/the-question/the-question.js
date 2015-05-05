(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.forms')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var TheQuestion = function () {
      this.question = '';
      this.example = 'Do you want to experience a new way to create journalistic interviews?';
    };

    TheQuestion.prototype.template = function () {
      return this.question;
    };

    MethodsService.add('TheQuestion', TheQuestion);
  }
})();
