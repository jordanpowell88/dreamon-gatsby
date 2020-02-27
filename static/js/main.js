/**
 *
 * ---------------------------------------------------------------------------
 *
 * Template Name: Liftfund | Nonprofit Template
 * Template URL: http://lovesome.biz/tf-template/liftfund
 * Author : urosd
 * Version : 1.0
 *
 * --------------------------------------------------------------------------- 
 *
 */

/*  ---------------------------------------------------------------------------
    Table of Contents
    ---------------------------------------------------------------------------

*	1. global area
*   2. header area
*   3. banner area
*   4. donate wraper area
*   5. about us area
*   6. donate count area
*   7. causes area
*   8. video area
*   9. gallery area
*   10. volunteers area
*   11. events area
*   12. donation area
*   13. testmonial area
*   14. project area
*   15. blog area
*   16. contact area
*   17. footer area

*/

(function ($) {

    'use strict';

    /*  ======================================
            fixed menu
        ====================================== */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('.header-area').addClass('fixed-menu');
        } else {
            $('.header-area').removeClass('fixed-menu');
        }
    });

    /*  ======================================
            Smooth scroll
        ====================================== */
    // $('a.nav-link').on('click', function (e) {
    //     var anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $(anchor.attr('href')).offset().top
    //     }, 1000);
    //     e.preventDefault();
    // });

    /*  ======================================
            bootstrap scrollspy
        ====================================== */
    // $(window).on('scroll', function () {
    //     if ($(window).scrollTop() > 0) {
    //         $('body').scrollspy({
    //             target: '.navbar',
    //             offset: 84
    //         });
    //     } else {
    //         $('body').scrollspy({
    //             target: '.navbar',
    //             offset: -1
    //         });
    //     }
    // });

    /*  ======================================
            banner typed
        ====================================== */
    var mainBannerArea = $('.banner-area');

    mainBannerArea.owlCarousel({
        animateOut: 'slideOutLeft',
        animateIn: 'fadeIn',
        items: 1,
        loop: true,
        dots: true,
        mouseDrag: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i><div class="itemprebg"></div>', '<div class="itemnextbg"></div><i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: true,
        autoplayTimeout: 9000, // auto play time
        responsive: {
            0: {
                nav: false
            },
            900: {
                nav: true
            }
        }
    });

    var itemBg = $('.itembg');

    $('.banner-area .single-banner').each(function () {
        var itmeImg = $(this).find('.itembg img').attr('src');
        $(this).css({
            background: 'url(' + itmeImg + ')'
        });
    });

    function slideThumb() {

        // Nav

        $('.banner-area .owl-item').removeClass('next prev');

        var currenSlide = $('.banner-area .owl-item.active');
        currenSlide.next('.owl-item').addClass('next');
        currenSlide.prev('.owl-item').addClass('prev');

        var nextSlideImg = $('.owl-item.next').find('.itembg img').attr('src');
        var prevSlideImg = $('.owl-item.prev').find('.itembg img').attr('src');

        $('.banner-area .owl-nav .owl-prev .itemprebg').css({
            background: 'url(' + prevSlideImg + ')'
        });

        $('.banner-area .owl-nav .owl-next .itemnextbg').css({
            background: 'url(' + nextSlideImg + ')'
        });

        // Thumbnail

        var dotcount = 1;

        $('.banner-area .owl-dot').each(function () {
            $(this).addClass('dotnumber' + dotcount);
            $(this).attr('data-info', dotcount);
            dotcount = dotcount + 1;
        });

        var slidecount = 1;

        $('.banner-area .owl-item').not('.cloned').each(function () {
            $(this).addClass('slidenumber' + slidecount);
            slidecount = slidecount + 1;
        });

        $('.banner-area .owl-dot').each(function () {

            var grab = $(this).data('info');
            var slidegrab = $('.slidenumber' + grab + ' .itembg img').attr('src');

            $(this).css("background-image", "url(" + slidegrab + ")");

        });
    }

    slideThumb();

    mainBannerArea.on('translated.owl.carousel', function () {
        slideThumb();
    });

    mainBannerArea.on('translate.owl.carousel', function () {
        $('.single-banner h1').removeClass('fadeInUp animated animated-04s').hide();
        $('.single-banner p').removeClass('fadeInUp animated animated-08s').hide();
        $('.single-banner a').removeClass('fadeInUp animated animated-12s').hide();
    });

    mainBannerArea.on('translated.owl.carousel', function () {
        $('.owl-item.active .single-banner h1').addClass('fadeInUp animated animated-04s').show();
        $('.owl-item.active .single-banner p').addClass('fadeInUp animated animated-08s').show();
        $('.owl-item.active .single-banner a').addClass('fadeInUp animated animated-12s').show();
    });
    
    /*---- client slider ----*/
    var client_slider = $(".client-wraper");
    client_slider.owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        mouseDrag: true,
        margin: 10,
        smartSpeed: 700,
        navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    /*---------- blog slider ---------*/
    var blog_slider = $('.blog-slide');
    blog_slider.owlCarousel({
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        nav: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    /*---------- blog slider ---------*/
    var blog_slider = $('.upcoming-events');
    blog_slider.owlCarousel({
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        nav: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        mouseDrag: true,
        items: 1,
    });

}($));