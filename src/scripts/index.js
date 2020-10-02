import '../styles/index.scss';

var $;
$ = require('jquery');

$(document).ready(function() {
  let callback_box = $('#callback_box');
  callback_box.hide();

    // On hover scrolling for view my work button
    $('#view_my_work_button').on(
    {
      mouseenter: function()
      {
        $(this).find('.icon').toggleClass('rotated');
      },

      mouseleave: function()
      {
        $(this).find('.icon').toggleClass('rotated');
      }
    });

    // Check if element is scrolled into view
    function isScrolledOutOfView(elem) {
      var docViewTop = $(window).scrollTop();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
  
      return ((elemBottom <= docViewTop));
    }

    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
  
      return ((elemBottom >= docViewTop));
    }

    // Tighter checks
    function isSectionVisible(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;

      return (elemTop <= docViewBottom);
    }
    
    let nav = $('#navigation');

    $(window).scroll(function() {
      // If element is scrolled into view, fade it in
      $('.animated', '#about').each(function() {
        if (isScrolledIntoView(this) === true) {
            if (this.hasAnimated === undefined){
                $(this).addClass('fadeInLeft visible');
            }
            this.hasAnimated = true;
        }
      });

      // If introduction is scrolled out of view, activate fixed position nav
      if (isScrolledOutOfView($('#introduction')) === true){
        if (!nav.hasClass('fixed')){
          nav.toggleClass('fixed');
        }
      };

      // Disable fixed and anchor back to original position
      if (isScrolledIntoView($('#introduction')) === true){
        if (nav.hasClass('fixed')){
          nav.toggleClass('fixed');
        }
      }

      // Update navigation current page link
      let currentEle = null;
      $('section').each(function() {
        if (isSectionVisible(this) === true){
          // Get the last section shown visible and that will be 
          currentEle = this;
        }
      });

      if (currentEle && isScrolledOutOfView($('#introduction')) === true){
        let selectedEle = null;
        // Remove any current active link classes
        $('.current').each(function(){
          $(this).removeClass('current');
        });

        if (currentEle.id === 'skillsets'){
          selectedEle = 'about';
        }
        else{
          selectedEle = currentEle.id;
        }
        nav.find('#nav' + selectedEle.capitalize()).toggleClass('current');
      }
    });

    // Animate the progress bars
    $(window).scroll(function() {
      $('.bar_container', '#skillsets').each(function() {
        let percentage = ($(this).find('.bar_percentage_label').text()).replace('%', '');
        let progressBar = $(this).find('.bar_progress');

        // Maximum percentage of the bar itself is 63% width
        // Scale all values against this max width
        let percentageView = Math.floor((percentage / 100) * 63);

        if (isScrolledIntoView(this) === true) {
            if (this.hasAnimated === undefined){
                progressBar.animate({
                    width: percentageView + '%'
                }, 1200);
            }
            this.hasAnimated = true;
        }
      });
    });

    // Search for all cards and apply slideshow functionality to them
    $('.card').each(function() {
      // Get the photocontainer
      let photoContainer = $(this).find('.photo_container');
      let slideshow = photoContainer.find('.slideshow');
      let screenshots = slideshow.children();

      let currentSlide = 0;
      let maxSlides = screenshots.length - 1;

      // Loop through each slide
      screenshots.each(function() {
        $(this).addClass('slide');

        // Hide every slide except first
        if (!$(this).hasClass('first')){
          $(this).hide();
        }
      });
        
      // Bind the arrow functions
      let sliderArrowsL = photoContainer.find('.left');
      let sliderArrowsR = photoContainer.find('.right');

      sliderArrowsL.bind('click', function(){
        // Hide current slide
        $(screenshots[currentSlide]).hide();

        if (currentSlide === 0){
          currentSlide = maxSlides;
        }
        else{
          currentSlide -= 1;
        }

        // Reveal next slide
        $(screenshots[currentSlide]).fadeIn("350");
      });

      sliderArrowsR.bind('click', function(){
        // Hide current slide
        $(screenshots[currentSlide]).hide();

        if (currentSlide === maxSlides){
          currentSlide = 0;
        }
        else{
          currentSlide += 1;
        }
        
        // Reveal next slide
        $(screenshots[currentSlide]).fadeIn("350");
      });
    });
  });

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};