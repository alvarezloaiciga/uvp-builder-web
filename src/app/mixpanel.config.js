(function() {
  'use strict';

  angular.module('analytics.mixpanel')
    .config(['$mixpanelProvider', function ($mixpanelProvider) {
      $mixpanelProvider.apiKey('d42f6a79df143684e61767c50175bb62'); // your token is different than your API key
    }]);
})();
