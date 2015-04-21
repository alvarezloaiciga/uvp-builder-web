'use strict';

function TheElevatorPitchFormatController() {
  var vm = this;
  vm.showUVP = false;
  vm.display = display;
  vm.back = back;

  vm.method = {
    customer: '',
    need: '',
    product: '',
    benefit: '',
    competition: '',
    differentiator: '',

    template: function() {
      return 'For ' + this.customer + ' who ' + this.need + ' our ' + this.product + ' that ' + this.benefit + ' unlike ' + this.competition + ' ' + this.differentiator;
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
  .controller('TheElevatorPitchFormatController', TheElevatorPitchFormatController);
