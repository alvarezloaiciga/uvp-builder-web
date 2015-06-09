(function() {
  'use strict';

  angular.module('analytics.mixpanel')
    .config(configuration);

  configuration.$inject = ['$mixpanelProvider', 'mixpanelApiKey'];

  function configuration($mixpanelProvider, mixpanelApiKey) {
    $mixpanelProvider.apiKey(mixpanelApiKey);
  }
})();
