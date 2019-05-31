/* exported $forkMeGH */
var $forkMeGH = (function () {
  var $DOM = $(''
      + '<div class="fork-me-github" style="position: absolute; top: 0; right: 0; z-index: 20;">'
        + '<a><img src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub"></a>'
      + '</div>'),
      $arch = $DOM.find('a');
  
  function show(url) {
    $arch.attr('href', url);
    $('body').append($DOM);
  }

  return {show: show};
})();
