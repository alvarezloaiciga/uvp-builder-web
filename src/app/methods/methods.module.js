(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb.methods', ['flow', 'ui.router'])
    .config(flowConfig)
    .value('userBackground', {image: undefined});

  flowConfig.$inject = ['flowFactoryProvider'];

  function flowConfig(flowFactoryProvider){
    flowFactoryProvider.defaults = {
      singleFile: true
    };
  }
})();
