(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.forms')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var ThreeWords = function () {
      this.word1 = '';
      this.word2 = '';
      this.word3 = '';
      this.product = '';
    };

    ThreeWords.prototype.template = function () {
      return this.word1 + ', ' + this.word2 + ' and ' + this.word3 + ' ' + this.product;
    };

  MethodsService.add('ThreeWords', ThreeWords);
  }
})();
