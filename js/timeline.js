/*
 * timeline.js
 * timeline module for SPA
 */

/* global wd: true */
/* exported $timeline */
var $timeline = (function() {
  var items = '',
      item = ''
        + '<li>'
          + '<div class="direction-r">'
            + '<div class="flag-wrapper">$</div>'
            + '<div class="desc">#</div>'
          + '</div>'
        + '</li>';

  function show(container) {
    wd.data.timeline.forEach(function(e) {
      var ev_items = item;
      ev_items = ev_items.replace('#', e.date);
      if(e.class === 'l') ev_items = ev_items.replace('direction-r', 'direction-l');
      if(e.href === '')   {
        ev_items = ev_items.replace('$','<span class="flag">' + e.event +'</span>');
      } else {
        ev_items = ev_items.replace('$', '<a href="' + e.href +'"><span class="flag">' + e.event + '</span></a>');
      }
      items += ev_items;
    });

    var $ul = $('<ul class="timeline"></ul>').append(items);
    container.append($ul);
  }
  
  return { show: show };
}());
