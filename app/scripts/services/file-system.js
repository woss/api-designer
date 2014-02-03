(function() {
  'use strict';

  angular.module('fs')
    .factory('fileSystem', function ($injector, config) {
      var fsFactory    = config.get('fsFactory');
      var hasFsFactory = fsFactory && $injector.has(fsFactory);

      if (!hasFsFactory) {
        config.set('fsFactory', (fsFactory = 'localStorageFileSystem'));
      }

      return $injector.get(fsFactory);
    });
})();
