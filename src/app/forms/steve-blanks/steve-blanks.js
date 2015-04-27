(function() {

  'use strict';

  (function (methods) {
    var SteveBlanks = methods.SteveBlanks = function () {
      this.customer = '';
      this.product = '';
      this.objective = '';
    };
    SteveBlanks.prototype.template = function () {
      return 'We help ' + this.customer + ' do ' + this.objective + ' doing ' + this.product;
    };
  }(window.methods = window.methods || {}));

})();
