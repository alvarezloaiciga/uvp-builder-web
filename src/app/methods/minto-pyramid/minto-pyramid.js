(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService', 'locale' ];

  function addMethod(MethodsService, locale) {
    locale.ready('mintoPyramid').then(function() {
      var MintoPyramid = function () {
        this.situation = '';
        this.issue = '';
        this.question = '';
        this.answer = '';
        this.example = locale.getString('mintoPyramid.example');
      };

      MintoPyramid.prototype.template = function () {
        return this.situation + '. ' + this.issue + '. ' + this.question + ' ' + this.answer + '.';
      };

      MethodsService.add('MintoPyramid', new MintoPyramid());
    });
  }
})();
