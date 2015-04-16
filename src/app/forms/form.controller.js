
'use strict';

function FormController() {
  var vm = this;
  vm.showUVP = false;

  vm.method = {
    for: "",
    who: "",
    our: "",
    is: "",
    that: "",

    template: function() {
      return [
        "For", this.for,
        "who", this.who,
        "our", this.our,
        "is (a / an)", this.is,
        "that", this.that].join(' ');
    }
  };

  vm.display = display;
  vm.back = back;

  function display(){
    vm.showUVP = true;
  }

  function back(){
    vm.showUVP = false;
  }
}

angular
  .module('uvpBuilderWeb')
  .controller('FormController', FormController);
