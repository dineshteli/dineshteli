    // display loading gif while load
    jQuery(document).ready(function() {
    jQuery('#loading').fadeOut(2000);
});




    ///////////////// fixed menu on scroll for desktop
if ($(window).width() > 0) {
  $(window).scroll(function(){  
     if ($(this).scrollTop() > 40) {
        $('#navbar_top').addClass("fixed-top");
        $('.navbar-color').css('background-color', 'rgba(10, 10, 10, 0.7)');
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




// $(document).ready(function(){
//   $(window).scroll(function(){
//     var scroll = $(window).scrollTop();
//     if (scroll > 40) {
//       $(".navbar-color").css("background" , "rgba(10, 10, 10, 0.7)");
//     }
//     else{
//       $(".navbar-color").css("background" , "black");    
//     }
//   })
// })



//<!-- -----------------------------------------------float btn--------------------------------------- -->


function myFunction() {
  var x = document.getElementById("content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


$(".main-btn").click(function () {
    $(".rotate").toggleClass("down");
})




$(".main-btn").click(function () {
    $(".rotate").toggleClass("down");
})
