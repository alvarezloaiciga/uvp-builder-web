(function() {
  'use strict';

  (function (methods) {
    var MintoPyramid = methods.MintoPyramid = function () {
      this.situation = '';
      this.issue = '';
      this.question = '';
      this.answer = '';
    };
    
    MintoPyramid.prototype.template = function () {
      return this.situation + '. ' + this.issue + '. ' + this.question + ' ' + this.answer + '.';
    };
  }(window.methods = window.methods || {}));

})();
