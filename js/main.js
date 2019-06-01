/*
 * main.js
 * root module for SPA
 */

/* global $forkMeGH $resume $bszPageFooter */
$(function() {
  $resume.show($('#wd-resume'));
  $forkMeGH.show('https://github.com/wangding/i');
  $bszPageFooter.show('#wd-resume-timeline');
});
