
jQuery(window).scroll(function () {

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


jQuery(document).bind("keyup keydown", function (e) {
	if (e.ctrlKey && e.keyCode == 80) {
		alert("print not allowed");
		return false;
	}

	else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
		alert("inspect element is not allowed");
		return false;
	}
	else if ((e.ctrlKey && e.shiftKey) || (e.ctrlKey || e.shiftKey)) {
		alert("not allowed");
		return false;
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
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}




// disableing right click
$(document).ready(function () {
	//to disable the entire page
	$("body").on("contextmenu", function (e) {
		return false;
	});

	//to disable the entire page 
	$('body').bind('cut copy paste', function (e) {
		e.preventDefault();
	});

	// var d = new Date();
	// document.getElementById("currentYear").innerHTML = d.getFullYear();
});



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


function findcost() {

	var domain_in = [435, 981, 1527]; //1year,2year,3year
	var domain_com = [602, 1593, 2584]; //1year,2year,3year
	domainCost = 0;
	hostingCost = 0;
	totalCost = 0;

	if ((document.getElementById("domainext").value == "- select -") && (document.getElementById("domainduration").value == "- select -") && (document.getElementById("visitLimit").value == "- select -") && (document.getElementById("hostingduration").value == "- select -")) {
		// when domain extension, duration and hosting duration are empty
		alert("Error\nPlease select the options");
	}

	else if ((document.getElementById("domainext").value !== "- select -") && (document.getElementById("domainduration").value !== "- select -") && (document.getElementById("visitLimit").value == "- select -") && (document.getElementById("hostingduration").value == "- select -")) {
		// only extension and domain duration is selected
		var result = confirm("Are you sure?\nYou are selecting only domain");
		if (result == true) {

			showDomainCost();
			showTotalCost();

		}
	}

	else if ((document.getElementById("visitLimit").value !== "- select -") && (document.getElementById("hostingduration").value !== "- select -") && (document.getElementById("domainext").value == "- select -") && (document.getElementById("domainduration").value == "- select -")) {
		// only hosting	
		var result = confirm("Are you sure?\nYou are selecting only hosting");
		if (result == true) {

			showHostingCost();
			showTotalCost();
		}
	}

	else if ((document.getElementById("domainext").value !== "- select -") && (document.getElementById("domainduration").value !== "- select -") && (document.getElementById("visitLimit").value !== "- select -") && (document.getElementById("hostingduration").value !== "- select -")) {
		// all are selected	
		showDomainCost();
		showHostingCost();
		showTotalCost();
	}

	else {
		alert("please fill the complete details");
	}






	function showDomainCost() {

		if (document.getElementById("domainext").value == ".in") {
			if (document.getElementById("domainduration").value == "1 year") {
				document.getElementById("setdomaincost").innerHTML = domain_in[0];
				domainCost = domain_in[0];
			}

			else if (document.getElementById("domainduration").value == "2 years") {
				document.getElementById("setdomaincost").innerHTML = domain_in[1];
				domainCost = domain_in[1];
			}

			else if (document.getElementById("domainduration").value == "3 years") {
				document.getElementById("setdomaincost").innerHTML = domain_in[2];
				domainCost = domain_in[2];
			}

			else {
				alert("error in .in domain");
			}
		}

		else if (document.getElementById("domainext").value == ".com") {
			if (document.getElementById("domainduration").value == "1 year") {
				document.getElementById("setdomaincost").innerHTML = domain_com[0];
				domainCost = domain_com[0];
			}

			else if (document.getElementById("domainduration").value == "2 years") {
				document.getElementById("setdomaincost").innerHTML = domain_com[1];
				domainCost = domain_com[1];
			}

			else if (document.getElementById("domainduration").value == "3 years") {
				document.getElementById("setdomaincost").innerHTML = domain_com[2];
				domainCost = domain_com[2];
			}

			else {
				alert("error in .com domain");
			}
		}

		else {
			alert("error in domain cost");
		}
	}


	function showHostingCost() {
		var host_cost = [199, 99, 89, 59];//1month,12months,24months,48months

		if (document.getElementById("hostingduration").value == "1 month") {
			document.getElementById("sethostingcost").innerHTML = host_cost[0];
			hostingCost = host_cost[0];
		}
		else if (document.getElementById("hostingduration").value == "12 months") {
			document.getElementById("sethostingcost").innerHTML = host_cost[1];
			hostingCost = host_cost[1];
		}
		else if (document.getElementById("hostingduration").value == "24 months") {
			document.getElementById("sethostingcost").innerHTML = host_cost[2];
			hostingCost = host_cost[2];
		}
		else if (document.getElementById("hostingduration").value == "48 months") {
			document.getElementById("sethostingcost").innerHTML = host_cost[3];
			hostingCost = host_cost[3];
		}
		else {
			alert("error in hosting");
		}
	}


	function showTotalCost() {
		totalCost = domainCost + hostingCost;
		document.getElementById("setTotalcost").innerHTML = totalCost;
	}

}


function cleardata() {
	if ((document.getElementById("domainext").value !== "- select -") || (document.getElementById("domainduration").value !== "- select -") || (document.getElementById("visitLimit").value !== "- select -") || (document.getElementById("hostingduration").value !== "- select -")) {
		var result = confirm("Do you want to clear the data?");
		if (result == true) {
			document.getElementById("domainext").value = "- select -";
			document.getElementById("domainduration").value = "- select -";
			document.getElementById("hostingduration").value = "- select -";
			document.getElementById("visitLimit").value = "- select -";
			document.getElementById("setdomaincost").innerHTML = 0;
			document.getElementById("sethostingcost").innerHTML = 0;
			document.getElementById("setTotalcost").innerHTML = 0;
			domainCost = 0;
			hostingCost = 0;
			totalCost = 0;

		}

		else {
			alert("cancelled")
		}
	}

	else {
		alert("Note:\nno data found to clear!")
	}

}