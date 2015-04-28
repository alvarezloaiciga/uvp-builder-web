(function() {
  'use strict';

  (function (methods) {
    var ElevatorPitch = methods.ElevatorPitch = function () {
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
  }(window.methods = window.methods || {}));

})();
