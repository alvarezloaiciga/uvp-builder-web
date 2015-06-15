(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService', 'locale' ];

  function addMethod(MethodsService, locale) {
    locale.ready('davidCowans').then(function() {
      var DavidCowans = function () {
        this.problem = '';
        this.product = '';
        this.differentiation = '';
        this.pedigree = '';
        this.example = locale.getString('davidCowans.example');
      };

      DavidCowans.prototype.template = function () {
        return this.problem + ' ' + this.product + ' ' + this.differentiation + ' ' + this.pedigree;
      };

      MethodsService.add('DavidCowans', new DavidCowans());
    });
  }
})();
