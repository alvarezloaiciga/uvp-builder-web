'use strict';

module.exports = function(config) {

  var configuration = {
    autoWatch : false,

    frameworks: ['jasmine'],

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'gulpAngular'
    },

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor',
      'karma-coverage'
    ],

    preprocessors: {
      'src/**/*.html': ['ng-html2js'],
      'src/**/*.js': ['coverage']
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      reporters:[
        {
          type : 'html',
          dir : 'coverage/'
        },
        {
          type: 'text'
        }
      ]
    },

    files: [
      'bower_components/angular/angular.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/ng-flow/dist/ng-flow.js',
      'src/**/*.module.js',
      'src/**/*.service.js',
      'src/**/*.controller.js',
      'src/**/*.directive.js',
      'src/**/*.spec.js'
    ],

    singleRun: true
  };

  config.set(configuration);
};
