(function ($) {
    "use strict";

    $('.nav-list').on('click', function() {
        $(this).toggleClass('show');
        $(this).parent().find('>ul').slideToggle().toggleClass('show');
    });
      
    $('.nav-open, .nav-close a').on('click', function() {
        $('.mobile-nav-wrapper, .mobile-nav, .dark-shadow').toggleClass('navActive');
    });
    $('.dark-shadow').on('click', function() {
        $('.mobile-nav-wrapper, .mobile-nav, .dark-shadow').removeClass('navActive');
    });
    // $('.dark-shadow').on('click', function() {
    //     $(this).toggleClass('d-none');
    // });
    // document.getElementById('menuToggle').addEventListener('click', () => {
    //     const navLinks = document.getElementById('navLinks');
    //     navLinks.classList.toggle('active');
    //   });
      
    //   document.querySelectorAll('.dropdown-toggle').forEach(item => {
    //     item.addEventListener('click', event => {
    //       event.preventDefault();
    //       const dropdownMenu = event.target.nextElementSibling;
    //       dropdownMenu.classList.toggle('show');
    //     });
    //   });
    
     // Custom Cursor
    //  $("body").append('<div class="mt-cursor"></div>');
    //  var cursor = $(".mt-cursor"),
    //      linksCursor = $("a, .swiper-nav, button, .cursor-effect"),
    //      crossCursor = $(".cross-cursor");
 
    //  $(window).on("mousemove", function (e) {
    //      cursor.css({
    //          transform: "translate(" + (e.clientX - 15) + "px," + (e.clientY - 15) + "px)",
    //          visibility: "inherit",
    //      });
    //  });
    
    //wow js 
	jQuery(window).on('load', function () {
		new WOW().init();
		window.wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true,
			live: true,
			offset: 80
		})
		window.wow.init();
	});

})(jQuery);



const swiper = new Swiper('.mySwiper', {
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,

    //   autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: true,
    //   },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }
    });
