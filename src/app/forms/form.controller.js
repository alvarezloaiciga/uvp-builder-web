'use strict';

function FormController() {
  var vm = this;
  vm.showUVP = false;
  vm.display = display;
  vm.back = back;

  vm.method = {
    customer: '',
    need: '',
    product: '',
    category: '',
    benefit: '',

    template: function() {
      return 'For ' + this.customer + ' who ' + this.need + ' our ' + this.product + ' is (a / an) ' + this.category + ' that ' + this.benefit;
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
  .controller('FormController', FormController);
