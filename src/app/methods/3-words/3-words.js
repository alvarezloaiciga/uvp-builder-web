(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService', 'locale' ];

  function addMethod(MethodsService, locale) {
    locale.ready('3words').then(function() {
      var ThreeWords = function () {
        this.word1 = '';
        this.word2 = '';
        this.word3 = '';
        this.product = '';
        this.example = locale.getString('3words.example');
      };

      ThreeWords.prototype.template = function () {
        return this.word1 + ', ' + this.word2 + ' ' + locale.getString('3words.and') + ' ' + this.word3 + ' ' + this.product;
      };

      MethodsService.add('ThreeWords', ThreeWords);
    });
  }
})();
