(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService', 'locale' ];

  function addMethod(MethodsService, locale) {
    locale.ready('steveBlanks').then(function() {
      var SteveBlanks = function () {
        this.customer = '';
        this.product = '';
        this.objective = '';
        this.example = locale.getString('steveBlanks.example');
      };

      SteveBlanks.prototype.template = function () {
        return locale.getString('steveBlanks.weHelp') + ' ' + this.customer + ' ' +
          locale.getString('steveBlanks.to') + ' ' + this.objective + ' ' +
          locale.getString('steveBlanks.doing') + ' ' + this.product;
      };

      MethodsService.add('SteveBlanks', new SteveBlanks());
    });
  }
})();
