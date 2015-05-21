(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .controller('MethodsController', MethodsController);

  MethodsController.$inject = ['$scope', 'MethodsService', '$state', '$rootScope'];

  function MethodsController($scope, MethodsService, $state, $rootScope) {
    var vm = this;
    vm.backgroundImage = '../../assets/images/home_background.png';
    $scope.userBackground = $scope.userBackground || {};
    vm.showUVP = false;
    vm.display = display;
    vm.back = back;
    vm.methodName = $state.current.name;
    vm.method = MethodsService.getMethod(vm.methodName);
    vm.isSideBarOpen = isSideBarOpen;
    vm.refresh = refresh;

    function display() {
      vm.showUVP = true;
      mixpanel.track('Method built', {
        methodName: vm.methodName
      });
    }

    function back() {
      vm.showUVP = false;
    }

    function isSideBarOpen() {
      return angular.element('#off-canvas').hasClass('move-left');
    }

    //This function is intended only to refresh the controller in order for the view to change from "<" to ">"
    function refresh() {
      return;
    }

    $rootScope.$on('$stateChangeSuccess',
      function(event, toState){
        $scope.$broadcast('stateChange', {stateName: toState.name});
      });
  }
})();
