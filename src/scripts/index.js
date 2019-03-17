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
            if (this.hasAnimated === undefined){
                $(this).addClass('fadeInLeft visible');
            }
            this.hasAnimated = true;
        }
      });
    });

    // Animate the progress bars
    $(window).scroll(function() {
      $('.bar_container', '#block_three_container').each(function() {
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
        $(screenshots[currentSlide]).show();
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
          $(screenshots[currentSlide]).show();
      });
    });
  });