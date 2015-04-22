(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.forms')
    .controller('GeoffMooresController', GeoffMooresController);

  function GeoffMooresController() {
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
        return 'For ' + this.customer + ' who ' + this.need + ' our ' + this.product + ' is ' + this.category + ' that ' + this.benefit;
      }
    };

    function display() {
      vm.showUVP = true;
    }

    function back() {
      vm.showUVP = false;
    }
  }
})();
