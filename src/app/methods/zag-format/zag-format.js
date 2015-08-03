(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService', 'locale' ];

  function addMethod(MethodsService, locale) {
    locale.ready('zagFormat').then(function() {
      var ZagFormat = function () {
        this.category = '';
        this.attribute = '';
        this.example = locale.getString('zagFormat.example');
      };

      ZagFormat.prototype.template = function () {
        return locale.getString('zagFormat.our') + ' ' + this.category + ' ' + locale.getString('zagFormat.only') + ' ' + this.attribute + '.';
      };

      MethodsService.add('ZagFormat', new ZagFormat());
    });
  }
})();
