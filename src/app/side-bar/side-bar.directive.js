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

  SideBarController.$inject = ['$scope', '$state', 'MethodsService'];

  function SideBarController($scope, $state, MethodsService) {
    var vm = this;
    vm.methods = MethodsService.methods;
    vm.isActive = isActive;

    function isActive(slug, index) {
      return ($state.params.slug === slug || $state.params.slug === index.toString());
    }

    //$scope.$on('stateChange', function (event, args) {
    //  vm.method = args.stateName;
    //});
  }
})();
