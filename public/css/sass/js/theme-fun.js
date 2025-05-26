$(function(){
    // Mobile Navigation //
    $('.mobile-nav-btn').click(function(e) {
        e.stopPropagation(); // Stop the event from reaching document level
        $('.mobile-nav-btn, .zsiq_floatmain, .mobile-nav, .app-container, .mobile-cta, .frameBar, header.mainhead, .headlogo').toggleClass('active');
    });

        $('.mainnav > li > a').click(function(e) {
          e.stopPropagation(); // Stop the event from reaching document level

          if ($(this).hasClass('active')) {
              $(this).removeClass('active');
              $(this).parents('li').children('.sub-menu').slideUp();
          } else {
              $(this).addClass('active');
              $(this).parents('li').children('.sub-menu').slideDown();
              $(this).parents('li').siblings('li').children('a').removeClass('active');
              $(this).parents('li').siblings('li').children('.sub-menu').slideUp();
          }
      });

      // Close the mobile menu if clicked outside of it
      $(document).click(function() {
        $('.mobile-nav-btn, .zsiq_floatmain, .mobile-nav, .app-container, .mobile-cta, .frameBar, header.mainhead, .headlogo').removeClass('active');
        $('.mainnav > li > a').removeClass('active');
        $('.mainnav .sub-menu').slideUp();
      });

    //*****************************
    // Match Height Functions
    //*****************************
    $('.matchheight').matchHeight();


    //*****************************
    // Slick Slider
    //*****************************

    $('.box.exchange-slider').slick({
        dots: false,
        arrows:false,
        autoplay: true,
        cssEase: 'linear',
        autoplaySpeed: 0,
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        speed: 3000,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    draggable: false,
                    swipe: false,
                },
            },
            {
              breakpoint: 461,
              settings: {
                  slidesToShow: 2,
                  arrows: false,
                  draggable: false,
                  swipe: false,
              },
          }
        ]

    });


    //*****************************
    // Responsive Slider
    //*****************************

    var tabrespsliders = {
      1: {slider : '.difference-slider'}
    };


    //*****************************
    // Responsive Slider
    //*****************************

    var respsliders = {
      1: {slider : '.res-slider'}

    };

    //*****************************
    // Function for Responsive Slider 991
    //*****************************

    $.each(tabrespsliders, function() {

        $(this.slider).slick({
            arrows: false,
            dots: true,
            autoplay: true,
            settings: "unslick",
            responsive: [
                {
                  breakpoint: 2000,
                  settings: "unslick"
                },
                {
                    breakpoint: 991,
                    settings: {
                        unslick: true
                    }
                }
            ]
        });
    });


    //*****************************
    // Function for Responsive Slider 767
    //*****************************

    $.each(respsliders, function() {

        $(this.slider).slick({
            arrows: false,
            dots: true,
            autoplay: true,
            settings: "unslick",
            responsive: [
                {
                  breakpoint: 2000,
                  settings: "unslick"
                },
                {
                    breakpoint: 767,
                    settings: {
                        unslick: true
                    }
                }
            ]
        });
    });


    // var m = new Masonry($('.grid').get()[0], {
    //     itemSelector: ".block-grid"
    // });


    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('.parallaxing1').parallax("50%", 0.1);
    $('.parallaxing2').parallax("50%", 0.2);
    $('.parallaxing3').parallax("50%", 0.3);
    $('.parallaxing4').parallax("50%", 0.4);
    $('.parallaxing5').parallax("50%", 0.5);
    $('.parallaxing6').parallax("50%", 0.6);
    $('.parallaxing7').parallax("50%", 0.7);
    $('.parallaxing8').parallax("50%", 0.8);
    $('.parallaxing9').parallax("50%", 0.9);
    $('.parallaxing10').parallax("50%", 0.10);

});
