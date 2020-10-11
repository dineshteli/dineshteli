


		// code for navbar color change on scroll

			    window.addEventListener('DOMContentLoaded', (event) => {
			        jQuery('.navbar-color').css("background-color", "rgba(5, 5, 5, 0.1)");

			        jQuery(window).scroll(function() {
			            if (jQuery(window).scrollTop() > 0) {
			                jQuery('.navbar-color').css("background-color", "#000");              
			            }

			             else {
			                jQuery('.navbar-color').css("background-color", "rgba(5, 5, 5, 0.1)");
			            }
			        });
			    }); 
	


	 	 // display loading gif while load
			    jQuery(document).ready(function() {
			    jQuery('#loading').fadeOut(2000);
			});


	 	// js code fpr mobile number validation

				function isNumber(evt) {
				        evt = (evt) ? evt : window.event;
				        var charCode = (evt.which) ? evt.which : evt.keyCode;
				        if ( (charCode > 31 && charCode < 48) || charCode > 57) {
				            return false;
				        }
				        return true;
				    }