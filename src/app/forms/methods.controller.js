(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb')
    .controller('MethodsController', MethodsController);

  MethodsController.$inject = ['MethodsService', '$state'];

  function MethodsController(MethodsService, $state) {
    var vm = this;
    vm.showUVP = false;
    vm.display = display;
    vm.back = back;
    vm.methodName = $state.current.name;

    vm.method = MethodsService.getMethod(vm.methodName);

    function display() {
      vm.showUVP = true;
    }

    function back() {
      vm.showUVP = false;
    }
  }
})();
