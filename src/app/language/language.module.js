(function() {
    'use strict';

    angular
      .module('uvpBuilderWeb.language', [
        'ui.router',
        'pascalprecht.translate',
        'tmh.dynamicLocale',
        ])
      .constant('LOCALES', {
        'locales': {
          'es_CR': 'Español',
          'en_US': 'English'
        },
        'preferredLocale': 'en_US'
      })
      .config(function ($translateProvider) {
        $translateProvider.useStaticFilesLoader({
          prefix: 'languages/locale-',
          suffix: '.json'
        });
        $translateProvider.preferredLanguage('en_US');
        //$translateProvider.useLocalStorage();
      })
      .config(function (tmhDynamicLocaleProvider) {
        tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
      });
})();
