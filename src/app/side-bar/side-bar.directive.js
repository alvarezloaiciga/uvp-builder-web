(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.forms')
    .directive('sideBar', sideBarDirective);

  function sideBarDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/side-bar/side-bar.html',
      controller: sideBarController,
      controllerAs: 'ctrl'
    };
  }

  sideBarController.$inject = ['$state'];

  function sideBarController($state) {
    var vm = this;
    vm.method = $state.current.name;
  }
})();
