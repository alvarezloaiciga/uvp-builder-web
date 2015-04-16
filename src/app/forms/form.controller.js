
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
        "For", this.for || "[target customer]",
        "who", this.who || "[statement of need or opportunity]",
        "our", this.our || "[product / service name]",
        "is (a / an)", this.is || "[product category]",
        "that", this.that || "[statement of benefit]"].join(' ');
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
