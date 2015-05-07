(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .directive('uvpChangeBackgroundButton', changeBackgroundButton);

  function changeBackgroundButton(){
    return {
      restrict: 'E',
      templateUrl: 'app/methods/changeBackgroundButton.html',
      controller: buttonController
    };
  }

  buttonController.$inject = ['$scope', 'userBackground'];

  function buttonController($scope, userBackground){
    $scope.$on('flow::complete', function (event, $flow) {
      userBackground.image = $flow.files[0];
      $scope.userBackground.image = userBackground.image;
    });
  }
})();
