/* exported $forkMeGH */
var $forkMeGH = (function () {
  //'<div class="fork-me-github" style="position: absolute; top: 0; right: 0; z-index: 20;">'

  function show(url) {
    var $box = document.createElement('div');
    $box.innerHTML = '<a href="' + url + '"><img src="http://sample.wangding.co/images/fork-me-on-github-red.webp" alt="Fork me on GitHub"></a>';
    $box.className = 'fork-me-github';
    $box.style = 'position: absolute; top: 0; right: 0; z-index: 20;';
    document.body.append($box);
  }

  return {show: show};
})();
