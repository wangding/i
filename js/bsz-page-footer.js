/* exported $bszPageFooter */
var $bszPageFooter = (function() {
  var $DOM = $(''
      + '<footer style="position: absolute; right: 20px; bottom: 10px; font-size: 9pt; color: gray; z-index: 20;">'
        + '<span id="busuanzi_container_site_uv" style="display: inline;">本站访客人数&nbsp;<span id="busuanzi_value_site_uv"></span>&nbsp;人次</span>'
      + '</footer>'
      + '<script async="" src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>');

  function show(container) {
    var $ctn = $(container),
        pst = $ctn.css('position');

    if(pst === 'static') $ctn.css('position', 'relative');
 
    $ctn.append($DOM);
  }

  return {show: show};
}());
