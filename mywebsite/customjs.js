
       jQuery(window).scroll(function() {

                  if ($(window).scrollTop() > 0) {
                     $("nav").removeClass("navbar-light");
                      $("nav").removeClass("bg-light");
                    $("nav").addClass('navbar-dark');
                    $("nav").addClass('navbar-color-on-scroll');
                     
                  }

                   else {
                      $("nav").removeClass("navbar-dark");
                      $("nav").removeClass("navbar-color-on-scroll");
                    $("nav").addClass('navbar-light');
                    $("nav").addClass('bg-light');
                      
                  }
              });


		// <!-- Initialize Swiper -->

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      //  navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      breakpoints: {     
      	300: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
      	640: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }

    });

  	// -------------------------------------got ot top button-----------------------------------

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
 