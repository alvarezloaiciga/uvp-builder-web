(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .directive('uvpSideBar', sideBarDirective);

  function sideBarDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/side-bar/side-bar.html',
      controller: sideBarController,
      controllerAs: 'ctrl'
    };
  }

  sideBarController.$inject = ['$scope', '$state', '$urlRouter'];

  function sideBarController($scope, $state) {
    var vm = this;
    vm.method = $state.current.name;

    $scope.$on('stateChange', function (event, args) {
      vm.method = args.stateName;
    });
  }
})();
