(function() {
  'use strict';

  (function (methods) {
    var DavidCowans = methods.DavidCowans = function () {
      this.problem = '';
      this.product = '';
      this.differentiation = '';
      this.pedigree = '';
    };

    DavidCowans.prototype.template = function () {
      return this.problem + ' ' + this.product + ' ' + this.differentiation + ' ' + this.pedigree;
    };
  }(window.methods = window.methods || {}));

})();
