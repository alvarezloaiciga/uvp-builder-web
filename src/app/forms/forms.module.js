(function() {
  'use strict';

  angular.module('uvpBuilderWeb.forms', ['flow'])
    .config(['flowFactoryProvider', function (flowFactoryProvider) {
      flowFactoryProvider.defaults = {
        target: 'app/forms/upload.php',
        permanentErrors: [404, 500, 501],
        maxChunkRetries: 1,
        chunkRetryInterval: 5000,
        simultaneousUploads: 4,
        singleFile: true
      };
      flowFactoryProvider.on('catchAll', function (event) {
        console.log('catchAll', arguments);
      });
      // Can be used with different implementations of Flow.js
      // flowFactoryProvider.factory = fustyFlowFactory;
    }])
    .value('userBackground', {image: undefined});
})();
