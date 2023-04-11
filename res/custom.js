
$(function (){

    "use strict";

    var wind = $(window);


    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'linear',         // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -60            // offste (in px) for fixed top navigation
    });


    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar");

        if(bodyScroll > 300){

            navbar.fadeIn();

        }else{

            navbar.fadeOut();
        }
    });


    //smooth button scroll
    $('.button-scroll').on('click', function(){

        var scrollTo = $(this).attr('data-scrollTo');

        $('body, html').animate({

        "scrollTop": $('#'+scrollTo).offset().top - 60
        }, 1000 );

    });


    // progress bar
    wind.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object =
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });


    // magnificPopup
    $('.portfolio .v-middle').magnificPopup({
      delegate: 'a',
      type: 'image'
    });


    // owlCarousel
    $('.blog .owl-carousel').owlCarousel({
        loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        dots:false,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


    // owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        navText:['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                nav:false,
                dots:true
            },
            767:{
                nav:true,
                dots:false
            }
        }
    });

    // stellar
    wind.stellar();

});


// Preloader

$(window).on("load",function (){

    $(".loading").fadeOut(500);

    // isotope
    $('.gallery').isotope({
      // options
      itemSelector: '.item-img'
    });

    var $gallery = $('.gallery').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

        $(this).addClass('active').siblings().removeClass('active');

    });

     // contact form
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});
