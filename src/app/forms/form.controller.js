
'use strict';

function FormController() {
  var vm = this;
  vm.showUVP = false;
  vm.form = [];
  vm.uvp = "";

  vm.display = display;
  vm.back = back;

  function display(){
    for (var i=0; i < vm.form.length; i++) {
      vm.uvp += vm.form[i] + " ";
    }
    vm.showUVP = true;
  }

  function back(){
    vm.showUVP = false;
    vm.uvp = "";
  }
}

angular
  .module('uvpBuilderWeb')
  .controller('FormController', FormController);
