(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var DavidCowans = function () {
      this.problem = '';
      this.product = '';
      this.differentiation = '';
      this.pedigree = '';
      this.example = 'Jaskr.com: Every day journalists spends hours finding which information people ' +
        'needs to know about Public Figures. We offer a publisher network to collect millions of ' +
        'questions and give to the journalist the popular ones with the best question recognition technology';
    };

    DavidCowans.prototype.template = function () {
      return this.problem + ' ' + this.product + ' ' + this.differentiation + ' ' + this.pedigree;
    };

    MethodsService.add('DavidCowans', DavidCowans);
  }
})();
