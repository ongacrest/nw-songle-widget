'use strict';

var notifier = require('node-notifier');
var gui = require('nw.gui');
var w = gui.Window.get();

w.on('new-win-policy', function(frame, url, policy) {
  gui.Shell.openExternal(url);
  policy.ignore();
});

window.onSongleWidgetReady = function(apiKey, songleWidget) {
  ['repeatSegmentEnter', 'chorusSegmentEnter'].forEach(function(name) {
    songleWidget.on(name, function(e) {
      notifier.notify({
        'title': 'Songle Widget',
        'message': name
      });
    });
  });
};
