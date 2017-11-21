/*
 * wd.js
 * wd root module for SPA
 */

var wd = (function() {
  // ------------------- BEGIN MODULE SCOPE VARIABLES --------
  var initModule;
  // ------------------- END MODULE SCOPE VARIABLES ----------
  

  
  // ------------------- BEGIN UTILTY METHODS ----------------
  
  // ------------------- END UTILTY METHODS  -----------------
  
  
  
  // ------------------- BEGIN DOM METHODS ------------------
  
  // ------------------- END DOM METHODS --------------------
  


  // ------------------- BEGIN EVENT HANDLERS ----------------
  
  // ------------------- END EVENT HANDLERS ------------------
  
 

  // ------------------- BEGIN PUBLIC METHODS ----------------
  initModule = function($container) {
    wd.resume.initModule($container);
  };

  return { initModule: initModule };
  // ------------------- END PUBLIC METHODS   ----------------
}());

$(function() { wd.initModule($('#wd-resume')); });
