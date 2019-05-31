/*
 * resume.js
 * resume module for SPA
 */

/* global wd $timeline: true */
/* exported $resume */
var $resume = (function() {
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

  var show = function(container) {
    $container = container;
    fillSlogan();
    fillData();
    $timeline.show($container.find('#wd-resume-timeline'));
  };

  return { show: show };
}());
