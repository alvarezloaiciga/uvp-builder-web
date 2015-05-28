(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService', 'locale' ];

  function addMethod(MethodsService, locale) {
    locale.ready('elevatorPitch').then(function() {
      var ElevatorPitch = function () {
        this.customer = '';
        this.need = '';
        this.product = '';
        this.category = '';
        this.benefit = '';
        this.competition = '';
        this.differentiator = '';
        this.example = locale.getString('elevatorPitch.example');
      };

      ElevatorPitch.prototype.template = function () {
        return locale.getString('elevatorPitch.for') + ' ' + this.customer + ' ' + locale.getString('elevatorPitch.who') + ' ' +
          this.need + ' ' + this.product + ' ' + locale.getString('elevatorPitch.is') + ' ' + this.category + ' ' +
          locale.getString('elevatorPitch.that') + ' ' + this.benefit + ' ' + locale.getString('elevatorPitch.unlike') + ' ' +
          this.competition + ' ' + this.differentiator;
      };

      MethodsService.add('ElevatorPitch', ElevatorPitch);
    });
  }
})();
