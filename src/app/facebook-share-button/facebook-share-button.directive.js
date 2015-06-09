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

  FacebookShareButtonController.$inject = ['$window', '$location', '$mixpanel'];

  function FacebookShareButtonController($window, $location, $mixpanel) {
    var vm = this;
    vm.postUVP = postUVP;
    var url = $location.host() + '/#/share/';

    function postUVP(uvp) {
      FB.ui(
        {
          method: 'share_open_graph',
          action_type: 'uvp-builder:build',
          action_properties: JSON.stringify({
            uvp:{
              url: url + encodeURIComponent(uvp),
              title: 'Watch my project\'s unique value proposition!',
              image: 'http://s29.postimg.org/hgp7dabfb/Screenshot_from_2015_06_02_14_59_37.png'
            }
          })
        },
        function(response) {
          if (!response) {
            $window.alert('An error occurred.');
          } else if (response.error) {
            $window.alert('Error: ' + response.error.message);
          } else {
            $mixpanel.track('FB share');
            $window.alert('Thanks for sharing!');
          }
        }
      );
    }
  }
})();
