(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.forms')
    .controller('MethodsController', MethodsController);

  MethodsController.$inject = ['$scope', 'MethodsService', '$state', 'userBackground'];

  function MethodsController($scope, MethodsService, $state, userBackground) {
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

    $scope.$on('flow::complete', function (event, $flow) {
      userBackground.image = $flow.files[0];
      console.log(userBackground.image);
      $scope.userBackground.image = userBackground.image;
    });
  }
})();
