(function() {
  'use strict';

  angular.module('uvpBuilderWeb')
    .factory("FirebaseConfig", firebaseConfig);

  firebaseConfig.$inject = ['$firebaseAuth'];

  function firebaseConfig($firebaseAuth) {
    var ref = new Firebase("https://uvp-builder.firebaseio.com");
    var auth = $firebaseAuth(ref);
    return {
      ref: ref,
      auth: auth
    };
  }
})();
