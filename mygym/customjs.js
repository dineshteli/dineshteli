    // display loading gif while load
    jQuery(document).ready(function() {
    jQuery('#loading').fadeOut(2000);
});




    ///////////////// fixed menu on scroll for desktop
if ($(window).width() > 992) {
  $(window).scroll(function(){  
     if ($(this).scrollTop() > 40) {
        $('#navbar_top').addClass("fixed-top");
        $('.navbar-color').css('background-color', 'rgba(43, 52, 37, 0.7)');
        // add padding top to show content behind navbar
        $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
      }else{
         $('#navbar_top').removeClass("fixed-top");
        $('.navbar-color').css('background-color', 'black');
         // remove padding top from body
        $('body').css('padding-top', '0');
      }   
  });
} // end if

