(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService', 'locale' ];

  function addMethod(MethodsService, locale) {
    locale.ready('ventureHacks').then(function() {
      var VentureHacks = function () {
        this.industryExample = '';
        this.attribute = '';
        this.example = locale.getString('ventureHacks.example');
      };

      VentureHacks.prototype.template = function () {
        return this.industryExample + ' ' + locale.getString('ventureHacks.for') + ' ' + this.attribute;
      };

      MethodsService.add('VentureHacks', new VentureHacks());
    });
  }
})();
