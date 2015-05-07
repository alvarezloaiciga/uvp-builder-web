(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.forms', ['flow', 'ui.router'])
    .config(flowConfig)
    .value('userBackground', {image: undefined});

  flowConfig.$inject = ['flowFactoryProvider'];

  function flowConfig(flowFactoryProvider) {
    flowFactoryProvider.defaults = {
      target: 'app/forms/upload.php',
      permanentErrors: [404, 500, 501],
      maxChunkRetries: 1,
      chunkRetryInterval: 5000,
      simultaneousUploads: 4,
      singleFile: true
    };
  }
})();
