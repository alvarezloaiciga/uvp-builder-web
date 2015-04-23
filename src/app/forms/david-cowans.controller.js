'use strict';

function DavidCowansController() {
  var vm = this;
  vm.showUVP = false;
  vm.display = display;
  vm.back = back;

  vm.method = {
    problem: '',
    product: '',
    differentiation: '',
    pedigree: '',

    template: function() {
      return this.problem + ' ' + this.product + ' ' + this.differentiation + ' ' + this.pedigree;
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
  .controller('DavidCowansController', DavidCowansController);
