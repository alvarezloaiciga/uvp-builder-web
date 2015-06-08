(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService', 'locale' ];

  function addMethod(MethodsService, locale) {
    locale.ready('theQuestion').then(function() {
      var TheQuestion = function () {
        this.question = '';
        this.example = locale.getString('theQuestion.example');
      };

      TheQuestion.prototype.template = function () {
        return this.question;
      };

      MethodsService.add('TheQuestion', TheQuestion);
    });
  }
})();
