/*
 * wd.resume.js
 * wd resume module for SPA
 */

/* global wd: true */
wd.resume = (function() {
  var $container, 
      data = ['info', 'title', 'contact', 'skills'];

  var fillSlogan = function() {
    wd.data.slogan[0] = '<strong>' + wd.data.slogan[0] + '</strong>';
    $container.find('#wd-resume-slogan').html(wd.data.slogan.join('<br>'));
  };

  var fillData = function() {
    data.forEach(function(id) {
      wd.data[id][0] = '<span class="wd-resume-title">' + wd.data[id][0] + '</span>';
      $container.find('#wd-resume-' + id).html(wd.data[id].join('<br>'));
    });
  };

  var initModule = function(container) {
    $container = container;
    fillSlogan();
    fillData();
    wd.timeline.initModule($container.find('#wd-resume-timeline'));
  };

  return { initModule: initModule };
}());
