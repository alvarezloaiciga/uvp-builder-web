(function (){
  'use strict';
  angular
    .module('uvpBuilderWeb.language')
    .service('LanguageService', LanguageService);

  LanguageService.$inject = ['$translate', 'LOCALES', '$rootScope', 'tmhDynamicLocale'];

  function LanguageService($translate, LOCALES, $rootScope, tmhDynamicLocale){
    var localesObj = LOCALES.locales;

    var _LOCALES = Object.keys(localesObj);
    if (!_LOCALES || _LOCALES.length === 0) {
      console.error('There are no _LOCALES provided');
    }
    var _LOCALES_DISPLAY_NAMES = [];
    _LOCALES.forEach(function (locale) {
      _LOCALES_DISPLAY_NAMES.push(localesObj[locale]);
    });

    var currentLocale = $translate.proposedLanguage();

    var checkLocaleIsValid = function (locale) {
      return _LOCALES.indexOf(locale) !== -1;
    };

    var setLocale = function (locale) {
      if (!checkLocaleIsValid(locale)) {
        console.error('Locale name "' + locale + '" is invalid');
        return;
      }
      currentLocale = locale;
      $translate.use(locale);
    };

    $rootScope.$on('$translateChangeSuccess', function (event, data) {
      document.documentElement.setAttribute('lang', data.language);

      tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));
    });

    return {
      getLocaleDisplayName: function () {
        return localesObj[currentLocale];
      },
      setLocaleByDisplayName: function (localeDisplayName) {
        setLocale(
          _LOCALES[
            _LOCALES_DISPLAY_NAMES.indexOf(localeDisplayName)
            ]
        );
      },
      getLocalesDisplayNames: function () {
        return _LOCALES_DISPLAY_NAMES;
      }
    };
  }
})();
