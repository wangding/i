/*
 * wd.js
 * wd root module for SPA
 */

var wd = (function() {
  var initModule = function($container) {
    wd.resume.initModule($container);
  };

  return { initModule: initModule };
}());

$(function() { wd.initModule($("#wd-resume")); });
