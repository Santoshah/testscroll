(function($) {
  "use strict"; // Start of use strict
  
  var scrollvalue = 0;
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    scrollvalue = $(window).scrollTop();
    setTimeout(function(){
      $(".copyright").addClass("activecopy");
    },501);

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 500, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  $(window).scroll(function() {
          if($(window).scrollTop() > 100) {
            if($(window).scrollTop()>scrollvalue+100){
                          $('.copyright').removeClass('activecopy');
                        }
          }
      });


})(jQuery); // End of use strict
