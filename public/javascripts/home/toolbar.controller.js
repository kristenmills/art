'use strict';

module.exports = function($state) {

  document.querySelector('art-app').addEventListener('toolbar-clicked', function(e) {
    $state.go(e.detail.state);
  });
}
