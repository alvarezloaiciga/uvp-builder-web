(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .controller('MethodController', MethodController);

  MethodController.$inject = ['$scope'];

  function MethodController($scope) {
    var vm = this;
    vm.backgroundImage = '../../assets/images/home_background.png';
    $scope.userBackground = $scope.userBackground || {};
    vm.isSideBarOpen = isSideBarOpen;
    vm.refresh = refresh;

    function isSideBarOpen() {
      return angular.element('#off-canvas').hasClass('move-left');
    }

    //This function is intended only to refresh the controller in order for the view to change from "<" to ">"
    function refresh() {
      return;
    }
  }
})();
