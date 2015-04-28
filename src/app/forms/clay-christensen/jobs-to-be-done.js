(function() {

  'use strict';

  (function (methods) {
    var ClayChristensen = methods.ClayChristensen = function () {
      this.verb = '';
      this.action= '';
      this.identifier = '';
      };
    ClayChristensen.prototype.template = function () {
      return this.verb + " " + this.action + " " + this.identifier;
    };
  }(window.methods = window.methods || {}));

})();
