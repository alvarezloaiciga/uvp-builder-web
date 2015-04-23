'use strict';

function MintoPyramidController() {
  var vm = this;
  vm.showUVP = false;
  vm.display = display;
  vm.back = back;

  vm.method = {
    situation: '',
    issue: '',
    question: '',
    answer: '',

    template: function() {
      return this.situation + '. ' + this.issue + '. ' + this.question + ' ' + this.answer + '.';
    }
  };

  function display() {
    vm.showUVP = true;
  }

  function back() {
    vm.showUVP = false;
  }
}

angular
  .module('uvpBuilderWeb')
  .controller('MintoPyramidController', MintoPyramidController);
