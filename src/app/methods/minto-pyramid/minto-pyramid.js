(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var MintoPyramid = function () {
      this.situation = '';
      this.issue = '';
      this.question = '';
      this.answer = '';
      this.example = 'Nowadays social networks are full of unclear information about Public Figures. ' +
        'Consequently, the public opinion is affected. How can social networks receive better content? ' +
        'Our publisher technology helps the creation of interviews for build the public opinion';
    };

    MintoPyramid.prototype.template = function () {
      return this.situation + '. ' + this.issue + '. ' + this.question + ' ' + this.answer + '.';
    };

    MethodsService.add('MintoPyramid', MintoPyramid);
  }
})();
