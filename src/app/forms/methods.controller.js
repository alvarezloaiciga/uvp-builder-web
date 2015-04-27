(function(){
  'use strict';

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

  angular
    .module('uvpBuilderWeb')
    .controller('MethodsController', MethodsController);

})();
