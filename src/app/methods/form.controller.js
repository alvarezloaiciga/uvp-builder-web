(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .controller('FormController', FormController);

  FormController.$inject = ['MethodsService', '$stateParams'];

  function FormController(MethodsService, $stateParams) {
    var vm = this;
    vm.showUVP = false;
    vm.display = display;
    vm.back = back;
    vm.method = MethodsService.getMethod($stateParams.slug);

    function display() {
      vm.showUVP = true;
    }

    function back() {
      vm.showUVP = false;
    }
  }
})();
