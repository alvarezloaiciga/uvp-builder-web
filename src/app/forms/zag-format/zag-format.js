(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.forms')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var ZagFormat = function () {
      this.category = '';
      this.attribute = '';
      this.example = 'Our publisher network is the only one that helps digital journalists to create public interviews';
    };

    ZagFormat.prototype.template = function () {
      return 'Our ' + this.category + ' is the only ' + this.attribute + '.';
    };

    MethodsService.add('ZagFormat', ZagFormat);
  }
})();
