(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService', 'locale' ];

  function addMethod(MethodsService, locale) {
    locale.ready('geoffMoores').then(function() {
      var GeoffMoores = function () {
        this.customer = '';
        this.need = '';
        this.product = '';
        this.category = '';
        this.benefit = '';
        this.example = locale.getString('geoffMoores.example');
      };
      GeoffMoores.prototype.template = function () {
        return locale.getString('geoffMoores.for') + ' ' + this.customer + ' ' + locale.getString('geoffMoores.who') + ' ' +
          this.need + ' ' + locale.getString('geoffMoores.our') + ' ' + this.product + ' ' +
          locale.getString('geoffMoores.is') + ' ' + this.category + ' ' + locale.getString('geoffMoores.that') + ' ' + this.benefit;
      };

      MethodsService.add('GeoffMoores', GeoffMoores);
    });
  }
})();
