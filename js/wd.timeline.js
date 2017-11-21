/*
 * wd.timeline.js
 * timeline module for SPA
 */

wd.timeline = (function() {
  // ------------------- BEGIN MODULE SCOPE VARIABLES --------
  var configMap = {
    "event_html" : String() 
        + '<li>'
          + '<div class="direction-r">'
            + '<div class="flag-wrapper">$</div>'
            + '<div class="desc">#</div>'
          + '</div>'
        + '</li>'
  }, initModule, $container, fillTimeline, html = '';
  // ------------------- END MODULE SCOPE VARIABLES ----------
  

  
  // ------------------- BEGIN UTILTY METHODS ----------------
  
  // ------------------- END UTILTY METHODS  -----------------
  
  
  
  // ------------------- BEGIN DOM METHODS ------------------
  fillTimeline = function() {
    wd.data.timeline.forEach(function(e) {
      var ev_html = configMap.event_html;
      ev_html = ev_html.replace("#", e.date);
      if(e.class === 'l') ev_html = ev_html.replace('direction-r', 'direction-l');
      if(e.href === "")   {
        ev_html = ev_html.replace("$",'<span class="flag">' + e.event +'</span>');
      } else {
        ev_html = ev_html.replace("$", '<a href="' + e.href +'"><span class="flag">' + e.event + '</span></a>');
      }
      html += ev_html;
    });
    $container.html(html);
  };
  // ------------------- END DOM METHODS --------------------
  


  // ------------------- BEGIN EVENT HANDLERS ----------------
  
  // ------------------- END EVENT HANDLERS ------------------
  
 

  // ------------------- BEGIN PUBLIC METHODS ----------------
  initModule = function(container)  {
    $container = container;
    //$container = $('#wd-resume-timeline');
    $container.html('<ul class="timeline"></ul>');
    $container = $container.find('.timeline');
    
    fillTimeline();
  };

  return { initModule: initModule };
  // ------------------- END PUBLIC METHODS   ----------------
}());
