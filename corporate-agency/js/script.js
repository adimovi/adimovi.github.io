$(window).on("load", function () {

    "use strict";
    /* ===================================
            Loading Timeout
     ====================================== */

    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $('.loader-bg').fadeToggle();

    }, 1500);

    // $('.navbar-collapse .navbar-nav .nav-link:nth-child(1)').addClass('active');
    $('.navbar-collapse .navbar-nav .nav-link:nth-child(2)').removeClass('active');
});

jQuery(function ($) {

    "use strict";

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

    //scroll to appear
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 60}, 1200);
    });

    $(".slider-btn").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 60}, 1200);
    });

    /* ===================================
        Side Menu
    ====================================== */

    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        });
    }

    /* ===================================
         Side Menu Animation
    ====================================== */

    $(".side-nav .navbar-nav .nav-item .nav-link").on("mouseenter", function () {
        var value = $(this).text();
        $("#mega-title .inner-mega-title").addClass('animation-effect').text(value);
    });

    $(".side-nav .navbar-nav .nav-item .nav-link").on("mouseleave", function () {
        $("#mega-title .inner-mega-title").removeClass('animation-effect');
    });

    $(".side-nav .navbar-nav .nav-item .nav-link").on("click", function () {
        $('body').addClass('cursor-change');

        setTimeout(function(){
            $('body').removeClass('cursor-change');
        }, 1500);
    });

    /* ===================================
       Mouse parallax
     ====================================== */

    $('.slider-section').mousemove(function(e) {
        $('[data-depth]').each(function () {
            var depth = $(this).data('depth');
            var amountMovedX = (e.pageX * -depth/4);
            var amountMovedY = (e.pageY * -depth/4);

            $(this).css({
                'transform':'translate3d(' + amountMovedX +'px,' + amountMovedY +'px, 0)',
            });
        });
    });

    /* ====================================
       da-thumb (Portfolio)
    *==================================== */

    $(function() {
        $('.da-thumbs > li ').each( function() { $(this).hoverdir(); } );
    });

    /* =====================================
        Portfolio-Isotope
    ====================================== */

    // isotope
    $('.gallery').isotope({
        // options
        itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
        // options
    });

    // filter items on button click
    $('.filtering').on('click', 'span', function () {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({filter: filterValue});

    });

    $('.filtering').on('click', 'span', function () {

        $(this).addClass('active').siblings().removeClass('active');

    });

    setTimeout(function (){
        $('.filtering .active').click();
    }, 1500);

    /*===================================
        Animated Progress Bar
   ====================================== */

    $(".progress-bar").each(function () {
        $(this).appear(function () {
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 2000)
        });
    });

    /* =====================================
             Pricing Active
   ===================================== */
    $('.pricing-item').on('mouseenter' , function(){
        $('.pricing-item').removeClass('active');
        $(this).addClass('active');
    }).on('mouseleave' , function(){
        $('.pricing-item').removeClass('active');
        $('.pricing-item.selected').addClass('active');
    });

    /*===================================
        Go Top Scroll
   ====================================== */
    $(function(){
        // Scroll Event
        $(window).on('scroll', function(){
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });
        // Click Event
        $('.go-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" },  500);
        });
    });

    /* =====================================
          Parallax
   ====================================== */

    if ($(window).width() > 992) {
        $(".parallax").parallaxie({
            speed: 0.55,
            offset: 0,
        });
    }

    /* ===================================
        WOW Animation
    ====================================== */

    if ($(window).width() > 991) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }

    /* ===================================
         Rotating Text
     ====================================== */

    if ($(".js-rotating").length) {
        $(".js-rotating").Morphext({
            // The [in] animation type. Refer to Animate.css for a list of available animations.
            animation: "flipInX",
            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
            separator: ",",
            // The delay between the changing of each phrase in milliseconds.
            speed: 3000,
            complete: function () {
                // Called after the entrance animation is executed.
            }
        });
    }

    /*===================================
        Owl Carousel
    ====================================== */


    
    $(".owl-split").owlCarousel({
        items: 1,
        margin: 0,
        dots: false,
        nav: false,
        loop: true,
        autoplay: true,
        smartSpeed: 500,
        navSpeed: true,
        autoplayHoverPause: false,
        responsiveClass: false,
    });
    

    //Partner Owl
    $('.partners-slider').owlCarousel({
        items: 2,
        autoplay: 1500,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        slideBy: 1,
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 4,
            },
            768: {
                items: 3,
            },
            480: {
                items: 2,
            },
            320: {
                items: 1,
            },
        }
    });

    //Testimonial Owl
    $('#testimonial-carousal').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    //modern agency index
    $("#vertical-bullets").show().revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        scrollbarDrag: "true",
        dottedOverlay: "none",
        navigation: {
            keyboardNavigation: "on",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            bullets: {
                enable: true,
                hide_onmobile: true,
                hide_under: 769,
                style: "agency",
                hide_onleave: false,
                direction: "vertical",
                h_align: "left",
                v_align: "center",
                h_offset: 30,
                v_offset: 0,
                space: 5,
                tmp: '<div class="tp-bullet-inner"></div><div class="tp-line"></div>'
            },
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
        },
        viewPort: {
            enable: true,
            outof: "pause",
            visible_area: "90%",
            presize: true
        },
        responsiveLevels: [4096, 1260, 778, 480],
        visibilityLevels: [4096, 1260, 778, 480],
        gridwidth: [1140, 1024, 750, 480],
        gridheight: [600, 500, 500, 350],
        lazyType: "none",
        parallax: {
            type: "mouse",
            origo: "enterpoint",
            speed: 400,
            speedbg: 0,
            speedls: 0,
            levels: [2, 3, 5, 10, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
            disable_onmobile: "on"
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 360,
        hideAllCaptionAtLilmit: 360,
        debugMode: false,
        fallbacks: {
            simplifyAll: "on",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }
    });
});

function openModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "block";
  }
  
  function closeModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
        modals[i].style.display = "none";
      }
    }
  }
  

    // Object mapping feature item titles to header content
    var headerContent = {
        'Info':{ 
            'buttons':{
                'btn1':{
                    'name':"First Name (only for AI)",
                    'content' :'Info about First Name (only for AI)',
                    'active': true
                },
                'btn2':{
                    'name':"Last Name (Onlt for AI)",
                    'content' :'Info about Last Name (Onlt for AI)'
                },
                'btn3':{
                    'name':"Preferred Gender",
                    'content' :'Info about Gender'
                },
                'btn4':{
                    'name':"Age",
                    'content' :'Info about Age'
                },
                'btn5':{
                    'name':"Address (Only for AI)",
                    'content' :'Info about Address (Only for AI)'
                },
                'btn6':{
                    'name':"Location",
                    'content' :'Info about Location'
                },
                'btn7':{
                    'name':"Height",
                    'content' :'Info about Height'
                },
                'btn8':{
                    'name':"Weight",
                    'content' :'Info about Weight'
                },
                'btn9':{
                    'name':"Clothing Size",
                    'content' :'Info about Clothing Size'
                },
                'btn10':{
                    'name':"Shoe Size",
                    'content' :'Info about Shoe Size'
                },
                'btn11':{
                    'name':"Dietary Preferences ",
                    'content' :'Info about Dietary Preferences '
                },
                'btn12':{
                    'name':"Physical Activity",
                    'content' :'Info about Physical Activity'
                },
                'btn13':{
                    'name':"Consumption Habits",
                    'content' :'Info about Consumption Habits'
                },
            },
        
        'heading':'Basic Information & Lifestyle',
        
        },
        
        'Pref': {
            'buttons':{
                'btn14':{
                    'name':"Hobbies",
                    'content' :'Info about Hobbies',
                    
                },
                'btn15':{
                    'name':"Favorite Types of Movies",
                    'content' :'Info about Favorite Types of Movies'
                },
                'btn16':{
                    'name':"Preferred Genres of Books",
                    'content' :'Info about Preferred Genres of Books'
                },
                'btn17':{
                    'name':"Music (favorite music genres, artists)",
                    'content' :'Info about Music (favorite music genres, artists)'
                },
                'btn18':{
                    'name':"Cultural Events",
                    'content' :'Info about Cultural Events'
                },
                'btn19':{
                    'name':"Favorite Destinations",
                    'content' :'Info about Favorite Destinations'
                },
                'btn20':{
                    'name':"Types of Vacations",
                    'content' :'Info about Types of Vacations'
                }
            },
          'heading':'Preferences & Interests',
        
        },


        'Tech': {
            'buttons':{
                'btn21':{
                    'name':"Devices Used",
                    'content' :'Info about Devices Used',
                    
                },
                'btn22':{
                    'name':"Favorite Platforms and Apps",
                    'content' :'Info about Favorite Platforms and Apps'
                },
                'btn23':{
                    'name':"Preferred Comunication Channels",
                    'content' :'Info about Preferred Comunication Channels'
                },
                'btn24':{
                    'name':"Desired Frequency of Notifications or Commercial Offers",
                    'content' :'Info about Desired Frequency of Notifications or Commercial Offers'
                }
            },
        'heading':'Technology & Communication',
        },

        'Eco':{ 
            'buttons':{
                'btn25':{
                    'name':"Salary Income",
                    'content' :'Info about salary income',
                    
                },
                'btn26':{
                    'name':"Career Goals",
                    'content' :'Info about Career Goals'
                },
                'btn27':{
                    'name':"Personal Aspirations",
                    'content' :'Info about personal aspiration'
                }
            },
        'heading':'Economic Profile & Goals',
        }


    };

    function changeHeader(title,btnID) {

         // Get all buttons within the section
    var buttons = document.querySelectorAll('.act-btn');

    // Remove the 'active' class from all buttons
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Add the 'active' class to the clicked button
    var activeButton = document.getElementById(btnID);
    console.log(activeButton);
    activeButton.classList.add('active');

        // Get the heading section
        var headingSection = document.getElementById('heading-section');
        // Retrieve the heading from the object based on the title
        var newHeading = headerContent[title].heading;
        // Retrieve the content from the object based on the title
        var newBtn = headerContent[title].buttons[btnID].name;
        var newBtnDesc = headerContent[title].buttons[btnID].content;
        // Update the inner HTML of the heading section with new heading
        headingSection.innerHTML = '<h2 class="text-white">' + newHeading + '</h2><h5 class="text-white">' + newBtn + '</h5>' + '<p class="text-white">' + newBtnDesc +  '</p>';

      
}
    
    window.onload = function() {
        for (var title in headerContent) {
            if (headerContent[title].buttons['btn1'].active) {
                changeHeader(title,'btn1');
                break;
            }
        }  
    };

    