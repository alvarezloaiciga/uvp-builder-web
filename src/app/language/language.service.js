(function (){
  'use strict';
  angular
    .module('uvpBuilderWeb.language')
    .service('LanguageService', LanguageService);

  LanguageService.$inject = ['$translate', 'LOCALES', '$rootScope', 'tmhDynamicLocale'];

  function LanguageService($translate, LOCALES, $rootScope, tmhDynamicLocale){
    var ls = this;
    ls.localesObj = LOCALES.locales;

    ls.locales = Object.keys(ls.localesObj);
    if (!ls.locales || ls.locales.length === 0) {
      console.error('There are no locales provided');
    }
    ls.localesNames = [];
    ls.locales.forEach(function (locale) {
      ls.localesNames.push(ls.localesObj[locale]);
    });

    ls.currentLocale = $translate.proposedLanguage();

    var checkLocaleIsValid = function (locale) {
      return ls.locales.indexOf(locale) !== -1;
    };

    var setLocale = function (locale) {
      if (!checkLocaleIsValid(locale)) {
        console.error('Locale name "' + locale + '" is invalid');
        return;
      }
      ls.currentLocale = locale;
      $translate.use(locale);
    };

    $rootScope.$on('$translateChangeSuccess', function (event, data) {
      document.documentElement.setAttribute('lang', data.language);

      tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));
    });

    return {
      getCurrentLocale: function() {
        return ls.currentLocale;
      },
      getLocaleDisplayName: function () {
        return ls.localesObj[ls.currentLocale];
      },
      setLocaleByDisplayName: function (localeDisplayName) {
        setLocale(
          ls.locales[
            ls.localesNames.indexOf(localeDisplayName)
            ]
        );
      },
      getLocalesDisplayNames: function () {
        return ls.localesNames;
      }
    };
  }
})();
