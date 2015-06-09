(function () {
  'use strict';

  angular.module('uvpBuilderWeb')
    .run(configuration);

  configuration.$inject = ['facebookAppId'];

  function configuration(facebookAppId) {

    window.fbAsyncInit = function () {
      FB.init({
        appId: facebookAppId, // App ID
        status: true,    // check login status
        cookie: true,    // enable cookies to allow the
                         // server to access the session
        xfbml: true,     // parse page for xfbml or html5
        // social plugins like login button below
        version: 'v2.0'  // Specify an API version
      });
    };

    // Load the SDK Asynchronously
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
})();
