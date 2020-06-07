// *********************************************** code for go to top btn ********************************************* -->

//Get the button
// var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     $('#myBtn').fadeIn();
  } else {
    $('#myBtn').fadeOut();
  }
}

// $(window).scroll(function() {
//     var height = $(window).scrollTop();
//     if (height > 50) {
//         $('#myBtn').fadeIn();
//     } else {
//         $('#myBtn').fadeOut();
//     }
// });

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}


//<!-- -----------------------------------------------float btn--------------------------------------- -->

$(document).ready(function(){
  $(".main-btn").click(function(){
    $(".content").toggle();
  });
});

//<!-- -------------------------------------- multi slider------------------------------------ -->

    $('#mixedSlider').multislider({
      duration: 750,
      interval: 3000
    });

    //<!-- -------------------------------------- multi slider for shirt pics------------------------------------ -->

    $('#mixedSlider-shirt').multislider({
      duration: 750,
      interval: 3000
    });


//<!-- -------------------------------------- multi slider for Tshirt pics------------------------------------ -->

    $('#mixedSlider-Tshirt').multislider({
      duration: 750,
      interval: 3000
    });


//<!-- -------------------------------------- multi slider for bags pics------------------------------------ -->

    $('#mixedSlider-bags').multislider({
      duration: 750,
      interval: 3000
    });


//<!-- -------------------------------------- multi slider for shoes pics------------------------------------ -->


    $('#mixedSlider-shoes').multislider({
      duration: 750,
      interval: 3000
    });


// contact us page form validation

function isNumber(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ( (charCode > 31 && charCode < 48) || charCode > 57) {
            return false;
        }
        return true;
    }

    // ---------------------------------------------------accordion-----------------------------------------
    var accordion = (function(){
  
  var $accordion = $('.js-accordion');
  var $accordion_header = $accordion.find('.js-accordion-header');
  var $accordion_item = $('.js-accordion-item');
 
  // default settings 
  var settings = {
    // animation speed
    speed: 400,
    
    // close all other accordion items if true
    oneOpen: false
  };
    
  return {
    // pass configurable object literal
    init: function($settings) {
      $accordion_header.on('click', function() {
        accordion.toggle($(this));
      });
      
      $.extend(settings, $settings); 
      
      // ensure only one accordion is active if oneOpen is true
      if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
        $('.js-accordion-item.active:not(:first)').removeClass('active');
      }
      
      // reveal the active accordion bodies
      $('.js-accordion-item.active').find('> .js-accordion-body').show();
    },
    toggle: function($this) {
            
      if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
        $this.closest('.js-accordion')
               .find('> .js-accordion-item') 
               .removeClass('active')
               .find('.js-accordion-body')
               .slideUp()
      }
      
      // show/hide the clicked accordion item
      $this.closest('.js-accordion-item').toggleClass('active');
      $this.next().stop().slideToggle(settings.speed);
    }
  }
})();

$(document).ready(function(){
  accordion.init({ speed: 300, oneOpen: true });
});




    





