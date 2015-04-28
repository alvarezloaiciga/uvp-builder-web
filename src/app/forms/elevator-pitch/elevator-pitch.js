(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb')
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
    };

    ElevatorPitch.prototype.template = function () {
      return 'For ' + this.customer + ' who ' + this.need + ' our ' + this.product + ' that ' + this.benefit + ' unlike ' + this.competition + ' ' + this.differentiator;
    };

    MethodsService.add('ElevatorPitch', ElevatorPitch);
  }
})();
