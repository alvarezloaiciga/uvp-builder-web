(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .directive('uvpClearFormButton', clearFormButton);

  function clearFormButton(){
    return {
      restrict: 'E',
      templateUrl: 'app/clear-form-button/clearFormButton.html',
    };
  }
})();
