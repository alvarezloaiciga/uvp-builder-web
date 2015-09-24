(function () {
  'use strict';

  angular.module('uvpBuilderWeb', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngResource',
    'ngLocalize',
    'mm.foundation',
    'uvpBuilderWeb.config',
    'analytics.mixpanel',
    'uvpBuilderWeb.language',
    'uvpBuilderWeb.methods',
    'uvpBuilderWeb.home'])
    .constant('API_URL', 'http://localhost:8000')
    .value('localeSupported', [
      'en-US',
      'es-CR'
    ])
    .value('localeFallbacks', {
      'en': 'en-US',
      'es': 'es-CR'
    });
})();
