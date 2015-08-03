(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService', 'locale' ];

  function addMethod(MethodsService, locale) {
    locale.ready('daveMcClures').then(function() {
      var DaveMcClures = function () {
        this.product = '';
        this.firstAdjective = '';
        this.secondAdjective = '';
        this.attribute = '';
        this.example = locale.getString('daveMcClures.example');
      };

      DaveMcClures.prototype.template = function () {
        return this.product + ' ' + locale.getString('daveMcClures.is') + ' ' + this.firstAdjective +
          ' ' + locale.getString('daveMcClures.and') + ' ' + this.secondAdjective + ' ' + locale.getString('daveMcClures.to') +
          ' ' + this.attribute;
      };

      MethodsService.add('DaveMcClures', new DaveMcClures());
    });
  }
})();
