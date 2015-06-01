(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods')
    .directive('uvpFacebookShareButton', facebookShareButtonDirective);

  function facebookShareButtonDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/facebook-share-button/facebook-share-button.html',
      controller: FacebookShareButtonController,
      controllerAs: 'shareBtn'
    };
  }

  function FacebookShareButtonController() {
    var vm = this;
    vm.postUVP = postUVP;

    function postUVP(uvp) {
      console.log(uvp.replace(/ /g,'%20'));
      FB.ui(
        { method: 'share',
          href: 'http://development.uvp-builder-web.divshot.io/#/share/' + uvp.replace(/ /g,'%20'),
          privacy: {'value': 'SELF'} },
        function(response) {
          if (!response) {
            $window.alert('An error occurred.');
          } else if (response.error) {
            $window.alert('Error: ' + response.error.message);
          } else {
            $window.alert('Thanks for sharing!');
          }
        }
      );
    }
  }
})();
