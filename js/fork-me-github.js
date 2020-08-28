/* exported $forkMeGH */
var $forkMeGH = (function () {
  var $DOM = $(''
      + '<div class="fork-me-github" style="position: absolute; top: 0; right: 0; z-index: 20;">'
        + '<a><img src="https://cdn.jsdelivr.net/gh/wangding/sample@master/images/fork-me-on-github-red.png" alt="Fork me on GitHub"></a>'
      + '</div>'),
      $arch = $DOM.find('a');
  
  function show(url) {
    $arch.attr('href', url);
    $('body').append($DOM);
  }

  return {show: show};
})();
