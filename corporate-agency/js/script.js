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
        delay: 10000, //added to have control over slider time
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
    document.body.style.overflow = 'hidden';

  }
  
  function closeModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
    document.body.style.overflow = 'auto';

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
            'buttons':[
                
                    {
                        'name': "First Name (Only for AI)", 
                        'content': 'The "First Name" feature uses AI for personalized ads without exposing personal data. It ensures user privacy while allowing personalized greetings like "Hello, [First Name], come try our pizza!" This direct approach boosts engagement. The process is secure: SNPad’s AI handles personalization internally, with advertisers never seeing the data. Enhance your campaign’s impact with easy-to-use, AI-driven personalization.'
                    },
                    {
                        'name': "Last Name (Only for AI)", 
                        'content': 'Enhance ad personalization with our "Last Name" feature, where AI tailors content while safeguarding user privacy. SNPad’s AI cleverly integrates last names into marketing materials, fostering a unique viewer connection without revealing identities to advertisers. It’s a seamless, private, and impactful way to personalize your marketing efforts.'
                    },
                    {
                        'name': "Address (Only for AI)",
                        'content': 'The "Address" element enhances ad relevance by using AI to incorporate location details seamlessly into your campaigns. Like the "First Name" and "Last Name" features, it operates under strict privacy controls, with all personalization done on SNPad’s secure servers. Advertisers can create compelling, location-specific content without direct access to personal data, ensuring user privacy and compliance.'
                    },
                
                    {
                        'name': "Gender",
                        'content': 'Our Gender-based targeting allows for tailored advertising, enhancing relevance and resonance with audiences. This feature supports inclusivity and precision in your campaigns, enabling you to address viewers with messages that align with their identity.'
                    },
                
                
                    {
                        'name': "Age",
                        'content': 'Target your ads by age to connect effectively with demographic groups. Age-based personalization helps in crafting age-appropriate messages, ensuring higher engagement and better campaign performance.'
                    },                
                
                    {
                        'name': "Location",
                        'content': 'Use location targeting to reach customers where it counts. Our Location feature enables ads that resonate locally, driving relevance and response rates by connecting with viewers in their own community.'
                    },
               
                
                    {
                        'name': "Height",
                        'content': 'Leverage Height data for specialized product promotions. This unique targeting feature is ideal for customizing offers in fashion and health industries, ensuring your audience feels seen and understood.'
                    },
               
                
                    {
                        'name': "Weight",
                        'content': 'Target ads based on weight, ideal for promoting fitness and health-related products. This feature allows advertisers to tailor messages that resonate with individuals’ health goals and interests.'
                    },
                
                
                    {
                        'name': "Clothing Size",
                        'content': 'Our Clothing Size targeting facilitates fashion and apparel ads that hit the mark, ensuring your audience sees offers that match their size preferences, enhancing satisfaction and conversion rates.'
                    },
                
                
                    {
                        'name': "Shoe Size",
                        'content': 'Shoe Size targeting enables precision in footwear advertising, connecting your products with the right audience, boosting relevance and response to your campaigns.'
                    },
                
                
                    {
                        'name': "Dietary Preferences",
                        'content': 'Dietary Preferences targeting helps in promoting food products and services to the right audience, from vegans to keto followers, enhancing ad effectiveness and customer engagement.'
                    },
                
                
                    {
                        'name': "Physical Activity",
                        'content': 'With Physical Activity targeting, promote sports and wellness products to an audience based on their activity levels, fostering higher engagement and interest in your offerings.'
                    },
                
                
                    {
                        'name': "Consumption Habits",
                        'content': 'Leverage Consumption Habits data to tailor ads according to user preferences and behaviors, from shopping habits to media consumption, for highly effective and personalized advertising.'
                    },
                
            ],
        
        'heading':'Basic Information & Lifestyle',
        
        },
        
        'Pref': {
            'buttons':[
                {
                    'name': "Hobbies",
                    'content': 'Hobbies targeting enables advertisers to connect their products with users’ interests, from crafting to outdoor adventures. This approach ensures ads are highly relevant, potentially increasing engagement for hobby-related products and services, such as sports equipment for athletes or art supplies for creatives.'
                },
                {
                    'name': "Favorite Types of Movies",
                    'content': 'Understanding users’ movie preferences allows advertisers to craft campaigns that resonate with fans of specific film genres. For instance, romantic movie lovers might be the ideal audience for flower shop ads, while horror enthusiasts could be targeted with themed entertainment or merchandise.'
                },
                {
                    'name': "Preferred Genres of Books",
                    'content': 'Targeting by book genre helps advertisers reach readers with tailored suggestions. Fantasy readers might enjoy ads for upcoming novels or themed merchandise, while non-fiction enthusiasts could be interested in the latest biographies or educational seminars.'
                },
                {
                    'name': "Music (favorite music genres, artists)",
                    'content': 'Music preferences offer a unique targeting avenue. Advertisers can reach rock fans with clothing lines that match the genre’s aesthetic or pop listeners with concert tickets. This strategy ensures that music-related products find their way to the most receptive audiences.'
                },
                {
                    'name': "Cultural Events",
                    'content': 'Promoting cultural events becomes more effective when ads reach those interested in specific types of activities. Museums, theaters, and festivals can target their advertising to users who engage with similar events, enhancing attendance and engagement.'
                },
                {
                    'name': "Favorite Destinations",
                    'content': 'Travel agencies and lifestyle brands can leverage favorite destination data to suggest personalized travel packages or gear. Whether it’s beach lovers or city explorers, targeted advertising can inspire their next adventure with perfectly matched offers.'
                },
                {
                    'name': "Types of Vacations",
                    'content': 'By understanding the vacation preferences of users, travel and leisure advertisers can present enticing offers for adventure trips, wellness retreats, or cultural tours, aligning closely with the interests and desires of their audience for a more compelling call to action.'
                }
            ],
          'heading':'Preferences & Interests',
        
        },


        'Tech': {
            'buttons':[
                {
                    'name': "Devices Used",
                    'content': 'For advertisers in the tech industry, understanding the specific devices used by their target audience is crucial. This insight allows for highly targeted advertising of mobile phones, accessories, computer parts, and laptops. By knowing whether your audience prefers smartphones over laptops or vice versa, you can tailor your marketing campaigns to highlight relevant products, compatibility, and tech solutions that resonate directly with their device usage patterns, enhancing conversion rates and customer satisfaction.'
                },
                {
                    'name': "Favorite Platforms and Apps",
                    'content': 'Identifying favorite platforms and apps helps advertisers to place their messages where their audience is most active. Whether it’s a popular social media app or a niche platform, aligning your ads with these preferences can significantly increase visibility and interaction rates.'
                },
                {
                    'name': "Preferred Comunication Channels",
                    'content': 'Tailoring your outreach to the preferred communication channels of your target audience enhances receptivity. Whether it’s email, SMS, or social media messaging, using the right channel can greatly improve open rates and engagement, making your communication efforts more effective.'
                },
                {
                    'name': "Desired Frequency of Notifications or Commercial Offers",
                    'content': 'Adjusting the frequency of notifications or commercial offers to match user preferences minimizes annoyance and opt-out rates. Advertisers can use this insight to maintain a balance, ensuring their audience receives enough information to stay engaged without feeling overwhelmed.'
                }
            ],
        'heading':'Technology & Communication',
        },

        'Eco':{ 
            'buttons':[
                {
                    'name': "Salary Income",
                    'content': 'Understanding the salary income of your target audience is pivotal for advertisers across all sectors. This key metric enables a deeper insight into the purchasing power and economic status of potential customers, allowing for more tailored and effective marketing strategies. For high-income segments, luxury goods, premium services, and investment opportunities can be emphasized, while for middle to lower income brackets, value deals, cost-effective solutions, and budget-friendly products can be highlighted. Incorporating salary income data into your advertising approach ensures that the products advertised are not just seen but are also relevant and accessible to the viewers based on their financial landscape. This strategic alignment increases the likelihood of conversion, customer satisfaction, and brand loyalty, making it a cornerstone for any successful marketing campaign.'
                },
                {
                    'name': "Career Goals",
                    'content': 'Targeting based on career goals allows advertisers to present products and services that align with the professional ambitions of their audience. Whether it’s further education, climbing the corporate ladder, or entrepreneurial ventures, ads can be customized to inspire and facilitate these aspirations.'
                },
                {
                    'name': "Personal Aspirations",
                    'content': 'Personal aspirations data empowers advertisers to connect on a more personal level, offering products and services that resonate with the individual’s life goals and dreams, from travel and fitness to home improvement and personal development.'
                }
            ],
        'heading':'Economic Profile & Goals',
        }


    };

    function isScreenSmallerThan(width) {
        return window.innerWidth < width;
    }

    function changeHeader(btn) {
        var category = btn.closest('.feature-item').dataset.category;
        var btnID = btn.dataset.btn;
        var categoryData = headerContent[category];
    
        // Update button classes
        document.querySelectorAll('.act-btn').forEach(function(btn) {
            btn.classList.remove('active');
        });
        btn.classList.add('active');
    
        // Update header content
        var headingSection = document.getElementById('heading-section');
        var mobileModal = document.getElementById('mobile-modal');
        var buttonData = categoryData.buttons.find(function(button) {
            return button.name === btn.textContent;
        });


        

        
        const maxWidth = 991;
        document.body.style.overflow = 'auto';
        if (isScreenSmallerThan(maxWidth)){

            // Initialize an empty string to store the concatenated HTML
let htmlContent = '';

// Loop through the array and concatenate HTML elements

  htmlContent = `
  
  <div id="modal" class="modal mx-auto px-0">
  <div class="container-fluid">
  <div class="row ">
  <div class="col-12">
      <div class="modal-content mob-modal" style="padding:0px;>

      <div style="padding:10px;">
      <h2 style="font-size:20px;" class="py-3 my-0">${categoryData.heading}
      </h2>
      <hr style=" border-top: 1px solid #86c3d7;width:100%;margin:0px">
      <h5 style="font-size:17px;" class="text-white text-center pb-2 pt-4">${buttonData.name}</h5>
      <div style="border:1px solid #86c3d7;border-radius:5px;margin:0px 10px;padding:10px 5px">
      <p style="font-size:14px;" class="text-white">${buttonData.content}</p>
      </div>
      <span style="transform: rotate(45deg);font-size:25px;" class="close-btn" onclick="closeModal('modal')">+</span>
      <button class="close-btn2 my-3" onclick="closeModal('modal')">Close</button>
      </div>
      </div>
      </div>
  </div>
</div>
</div>

  `;
// Set the final HTML content to the carDiv
mobileModal.innerHTML = htmlContent;
var modal = document.getElementById('modal');
modal.style.display = "block";
document.body.style.overflow = 'hidden';

    
            console.log('e pe mobil');
        }
        else
        {headingSection.innerHTML = '<h2 class="text-white">' + categoryData.heading + '</h2><h5 class="text-white">' + buttonData.name + '</h5><p class="text-white">' + buttonData.content + '</p>';}
    }


    window.onload = function() {
        document.querySelectorAll('.act-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                changeHeader(this);
            });
        });


        const maxWidth = 991;
    if(!isScreenSmallerThan(maxWidth)){
    
    
    
        // Find the first active button in the 'Info' category and trigger a click event on it
        var firstActiveBtn = document.querySelector('.feature-item .first');
        console.log(firstActiveBtn);
        if (firstActiveBtn) {
            firstActiveBtn.click();
        }

        document.addEventListener("DOMContentLoaded", function() {
            var modals = document.querySelectorAll('.modal');
            console.log(modals);
            modals.forEach(function(modal) {
              centerModal(modal);
              window.addEventListener('resize', function() {
                centerModal(modal);
              });
            });
          
            function centerModal(modal) {
              var modalContent = modal.querySelector('.modal-content');
              var modalHeight = modalContent.offsetHeight;
              modalContent.style.marginTop = -modalHeight / 2 + 'px';
            }
          });
    };

    }    

    
