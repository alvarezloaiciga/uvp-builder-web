(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var DaveMcClures = function () {
      this.product = '';
      this.firstAdjective = '';
      this.secondAdjective = '';
      this.attribute = '';
      this.example = 'Jaskr is the powerful and human way to create public interviews';
    };

    DaveMcClures.prototype.template = function () {
      return this.product + ' is ' + this.firstAdjective + ' and ' + this.secondAdjective + ' to ' + this.attribute;
    };

  MethodsService.add('DaveMcClures', DaveMcClures);
  }
})();
