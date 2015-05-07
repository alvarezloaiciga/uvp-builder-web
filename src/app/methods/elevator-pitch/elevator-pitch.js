(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var ElevatorPitch = function () {
      this.customer = '';
      this.need = '';
      this.product = '';
      this.benefit = '';
      this.competition = '';
      this.differentiator = '';
      this.example = 'For digital Journalists who need to generate valuable and viral content from interviews, ' +
        'Jaskr is a publisher network that creates powerful interviews to collect people\'s questions, unlike other ' +
        'question and answer platforms Jaskr’s technology build a unique social experience';
    };

    ElevatorPitch.prototype.template = function () {
      return 'For ' + this.customer + ' who ' + this.need + ' our ' + this.product + ' that ' + this.benefit + ' unlike ' + this.competition + ' ' + this.differentiator;
    };

    MethodsService.add('ElevatorPitch', ElevatorPitch);
  }
})();
