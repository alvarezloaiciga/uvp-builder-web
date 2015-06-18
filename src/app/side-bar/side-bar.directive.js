(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .directive('uvpSideBar', sideBarDirective);

  function sideBarDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/side-bar/side-bar.html',
      controller: SideBarController,
      controllerAs: 'sideBar'
    };
  }

  SideBarController.$inject = ['$scope', '$state', '$urlRouter'];

  function SideBarController($scope, $state) {
    var vm = this;
    vm.method = $state.current.name;
    vm.isActive = isActive;

    function isActive(option) {
      return (vm.method === option);
    }
  }
})();
