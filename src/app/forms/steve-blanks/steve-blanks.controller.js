(function(){
  'use strict';

  angular
    .module('uvpBuilderWeb.forms')
    .controller('SteveBlanksController', SteveBlanksController);

  function SteveBlanksController() {
    var vm = this;
    vm.showUVP = false;
    vm.display = display;
    vm.back = back;

    vm.method = {
      customer: '',
      product: '',
      objective: '',

      template: function() {
        return 'We help ' + this.customer + ' do ' + this.objective + ' doing ' + this.product;
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
