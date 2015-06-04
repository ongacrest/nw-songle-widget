/**
 * @author Yuta KAWASAKI <yuta.kawasaki@aist.go.jp>
 * @license Songle Widget + NW.js Example
 *
 * Visit http://songle.jp/info/Credit.html OR http://widget.songle.jp/docs/v1 for documentation.
 * Copyright (c) 2015 National Institute of Advanced Industrial Science and Technology (AIST)
 *
 * Distributed under the terms of the MIT license only for non-commercial purposes.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of this Songle Widget API Examples.
 * If you are interested in commercial use of Songle Widget API, please contact "songle-ml@aist.go.jp".
 */
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
