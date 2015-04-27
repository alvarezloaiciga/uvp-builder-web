(function() {

  'use strict';

  (function (methods) {
    var GeoffMoores = methods.GeoffMoores = function () {
      this.customer = '';
      this.need = '';
      this.product = '';
      this.category = '';
      this.benefit = '';
    };
    GeoffMoores.prototype.template = function () {
      return 'For ' + this.customer + ' who ' + this.need + ' our ' + this.product + ' is ' + this.category + ' that ' + this.benefit;
    };
  }(window.methods = window.methods || {}));

})();
