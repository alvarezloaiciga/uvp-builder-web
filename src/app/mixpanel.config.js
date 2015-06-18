(function() {
  'use strict';

  angular.module('analytics.mixpanel')
    .config(configuration);

  configuration.$inject = ['$mixpanelProvider', 'environment'];

  function configuration($mixpanelProvider, environment) {
    $mixpanelProvider.apiKey(environment.mixpanelApiKey);
  }
})();
