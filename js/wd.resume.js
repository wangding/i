/*
 * wd.resume.js
 * wd resume module for SPA
 */

wd.resume = (function($) {
  // ------------------- BEGIN MODULE SCOPE VARIABLES --------
  var $container, initModule, fillSlogan, fillTimeline, setWidth, onResize,
      data = ['info', 'title', 'contact', 'skills'], fillData;
  // ------------------- END MODULE SCOPE VARIABLES ----------
  

  
  // ------------------- BEGIN UTILTY METHODS ----------------
  // ------------------- END UTILTY METHODS  -----------------
  
  
  
  // ------------------- BEGIN DOM METHODS ------------------
  fillSlogan = function() {
    wd.data.slogan[0] = '<strong>' + wd.data.slogan[0] + '</strong>';
    $container.find('#wd-resume-slogan').html(wd.data.slogan.join('<br>'));
  };

  fillData = function() {
    data.forEach(function(id) {
      wd.data[id][0] = '<span class="wd-resume-title">' + wd.data[id][0] + '</span>';
      $container.find('#wd-resume-' + id).html(wd.data[id].join('<br>'));
    });
  };
  
  setWidth = function() {
    var totalWidth = $container.width();

    data.forEach(function(id) {
      $container.find('#wd-resume-' + id).width(totalWidth /2);
    });
    
  };
  // ------------------- END DOM METHODS --------------------
  


  // ------------------- BEGIN EVENT HANDLERS ----------------
  onResize = function(event) {
    setWidth();
    return true;
  };
  // ------------------- END EVENT HANDLERS ------------------
  
 

  // ------------------- BEGIN PUBLIC METHODS ----------------
  initModule = function(container) {
    $container = container;
    fillSlogan();
    fillData();
    wd.timeline.initModule($container.find('#wd-resume-timeline'));
  };

  return { initModule: initModule };
  // ------------------- END PUBLIC METHODS   ----------------
}(jQuery));

