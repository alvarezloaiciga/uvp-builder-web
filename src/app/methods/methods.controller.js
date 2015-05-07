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

    function display() {
      vm.showUVP = true;
    }

    function back() {
      vm.showUVP = false;
    }

    $rootScope.$on('$stateChangeSuccess',
      function(event, toState){
        $scope.$broadcast('stateChange', {stateName: toState.name});
      });
  }
})();
