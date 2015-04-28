(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var MintoPyramid = function () {
      this.situation = '';
      this.issue = '';
      this.question = '';
      this.answer = '';
    };

    MintoPyramid.prototype.template = function () {
      return this.situation + '. ' + this.issue + '. ' + this.question + ' ' + this.answer + '.';
    };

    MethodsService.add('MintoPyramid', MintoPyramid);
  }
})();
