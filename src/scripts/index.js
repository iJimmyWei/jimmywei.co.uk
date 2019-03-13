import '../styles/index.scss';

var $;
$ = require('jquery');

$(document).ready(function() {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
  
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    // If element is scrolled into view, fade it in
    $(window).scroll(function() {
      $('.animated', '#block_two_container').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).addClass('fadeInLeft visible');
        }
      });
    });
  });