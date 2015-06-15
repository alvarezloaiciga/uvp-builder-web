(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService', 'locale' ];

  function addMethod(MethodsService, locale) {
    locale.ready('clayChristensen').then(function() {
      var ClayChristensen = function () {
        this.verb = '';
        this.action = '';
        this.identifier = '';
        this.example = locale.getString('clayChristensen.example');
      };

      ClayChristensen.prototype.template = function () {
        return this.verb + ' ' + this.action + ' ' + this.identifier;
      };

      MethodsService.add('ClayChristensen', new ClayChristensen());
    });
  }
})();
