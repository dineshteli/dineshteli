
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

document.onkeydown = function (e) {
	if (event.keyCode == 123) {
		return false;
	}
	else if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
		alert("inspect elemet blocked");
		return false;
	}
	else if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
		return false;
	}
	else if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
		return false;
	}
	else if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
		return false;
	}
	else if (e.ctrlKey && e.keyCode == "P".charCodeAt(0)) {
		alert("Print blocked");
		return false;
	}
	else if (e.ctrlKey && e.keyCode == 80) {
		return false;
	}
	else if ((e.ctrlKey && e.shiftKey) || (e.ctrlKey || e.shiftKey)) {
		return false;
	}
}

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

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
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

function findcost() {

	var domainCost = 0;
	var hostingCost = 0;
	var totalCost = 0;

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

		var domainRenCost = [546, 991, 2659, 3724, 777, 1585, 2073, 1434, 1135, 2128, 1596];//domain renew cost

		if (document.getElementById("domainext").value == ".in") {

			var domain_in = [435, 981, 1527]; //1year,2year,3year
			document.getElementById("domainRenewalCost").innerHTML = domainRenCost[0];

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
		}

		else if (document.getElementById("domainext").value == ".com") {

			var domain_com = [602, 1593, 2584]; //1year,2year,3year
			document.getElementById("domainRenewalCost").innerHTML = domainRenCost[1];

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
		}

		else if (document.getElementById("domainext").value == ".online") {

			var domain_online = [75, 2734, 5393]; //1year,2year,3year
			document.getElementById("domainRenewalCost").innerHTML = domainRenCost[2];

			if (document.getElementById("domainduration").value == "1 year") {
				document.getElementById("setdomaincost").innerHTML = domain_online[0];
				domainCost = domain_online[0];
			}
			else if (document.getElementById("domainduration").value == "2 years") {
				document.getElementById("setdomaincost").innerHTML = domain_online[1];
				domainCost = domain_online[1];
			}
			else if (document.getElementById("domainduration").value == "3 years") {
				document.getElementById("setdomaincost").innerHTML = domain_online[2];
				domainCost = domain_online[2];
			}
		}

		else if (document.getElementById("domainext").value == ".tech") {

			var domain_tech = [75, 3799, 7523]; //1year,2year,3year
			document.getElementById("domainRenewalCost").innerHTML = domainRenCost[3];

			if (document.getElementById("domainduration").value == "1 year") {
				document.getElementById("setdomaincost").innerHTML = domain_tech[0];
				domainCost = domain_tech[0];
			}
			else if (document.getElementById("domainduration").value == "2 years") {
				document.getElementById("setdomaincost").innerHTML = domain_tech[1];
				domainCost = domain_tech[1];
			}
			else if (document.getElementById("domainduration").value == "3 years") {
				document.getElementById("setdomaincost").innerHTML = domain_tech[2];
				domainCost = domain_tech[2];
			}
		}

		else if (document.getElementById("domainext").value == ".xyz") {

			var domain_xyz = [75, 852, 1629]; //1year,2year,3year
			document.getElementById("domainRenewalCost").innerHTML = domainRenCost[4];

			if (document.getElementById("domainduration").value == "1 year") {
				document.getElementById("setdomaincost").innerHTML = domain_xyz[0];
				domainCost = domain_xyz[0];
			}
			else if (document.getElementById("domainduration").value == "2 years") {
				document.getElementById("setdomaincost").innerHTML = domain_xyz[1];
				domainCost = domain_xyz[1];
			}
			else if (document.getElementById("domainduration").value == "3 years") {
				document.getElementById("setdomaincost").innerHTML = domain_xyz[2];
				domainCost = domain_xyz[2];
			}
		}

		else if (document.getElementById("domainext").value == ".live") {

			var domain_live = [272]; //1year,2year,3year;
			document.getElementById("domainRenewalCost").innerHTML = domainRenCost[5];

			if (document.getElementById("domainduration").value == "1 year") {
				document.getElementById("setdomaincost").innerHTML = domain_live[0];
				domainCost = domain_live[0];
			}
			else if (document.getElementById("domainduration").value == "2 years") {
				alert(".live domain is available only for 1 year");
				document.getElementById("domainext").value = "- select -";
				document.getElementById("domainduration").value = "- select -";
			}
			else if (document.getElementById("domainduration").value == "3 years") {
				alert(".live domain is available only for 1 year");
				document.getElementById("domainext").value = "- select -";
				document.getElementById("domainduration").value = "- select -";
			}
		}

		else if (document.getElementById("domainext").value == ".digital") {

			var domain_digital = [259, 2332, 4405]; //1year,2year,3year
			document.getElementById("domainRenewalCost").innerHTML = domainRenCost[6];

			if (document.getElementById("domainduration").value == "1 year") {
				document.getElementById("setdomaincost").innerHTML = domain_digital[0];
				domainCost = domain_digital[0];
			}
			else if (document.getElementById("domainduration").value == "2 years") {
				document.getElementById("setdomaincost").innerHTML = domain_digital[1];
				domainCost = domain_digital[1];
			}
			else if (document.getElementById("domainduration").value == "3 years") {
				document.getElementById("setdomaincost").innerHTML = domain_digital[2];
				domainCost = domain_digital[2];
			}
		}

		else if (document.getElementById("domainext").value == ".email") {

			var domain_email = [272]; //1year,2year,3year
			document.getElementById("domainRenewalCost").innerHTML = domainRenCost[7];

			if (document.getElementById("domainduration").value == "1 year") {
				document.getElementById("setdomaincost").innerHTML = domain_email[0];
				domainCost = domain_email[0];
			}
			else if (document.getElementById("domainduration").value == "2 years") {
				alert(".email domain is available only for 1 year");
				document.getElementById("domainext").value = "- select -";
				document.getElementById("domainduration").value = "- select -";
			}
			else if (document.getElementById("domainduration").value == "3 years") {
				alert(".email domain is available only for 1 year");
				document.getElementById("domainext").value = "- select -";
				document.getElementById("domainduration").value = "- select -";
			}
		}

		else if (document.getElementById("domainext").value == ".me") {

			var domain_me = [460]; //1year,2year,3year
			document.getElementById("domainRenewalCost").innerHTML = domainRenCost[8];

			if (document.getElementById("domainduration").value == "1 year") {
				document.getElementById("setdomaincost").innerHTML = domain_me[0];
				domainCost = domain_me[0];
			}
			else if (document.getElementById("domainduration").value == "2 years") {
				alert(".me domain is available only for 1 year");
				document.getElementById("domainext").value = "- select -";
				document.getElementById("domainduration").value = "- select -";
			}
			else if (document.getElementById("domainduration").value == "3 years") {
				alert(".me domain is available only for 1 year");
				document.getElementById("domainext").value = "- select -";
				document.getElementById("domainduration").value = "- select -";
			}
		}

		else if (document.getElementById("domainext").value == ".site") {

			var domain_site = [75, 2203, 4331]; //1year,2year,3year
			document.getElementById("domainRenewalCost").innerHTML = domainRenCost[9];

			if (document.getElementById("domainduration").value == "1 year") {
				document.getElementById("setdomaincost").innerHTML = domain_site[0];
				domainCost = domain_site[0];
			}
			else if (document.getElementById("domainduration").value == "2 years") {
				document.getElementById("setdomaincost").innerHTML = domain_site[1];
				domainCost = domain_site[1];
			}
			else if (document.getElementById("domainduration").value == "3 years") {
				document.getElementById("setdomaincost").innerHTML = domain_site[2];
				domainCost = domain_site[2];
			}
		}

		else if (document.getElementById("domainext").value == ".website") {

			var domain_website = [75, 1671, 3267]; //1year,2year,3year
			document.getElementById("domainRenewalCost").innerHTML = domainRenCost[10];

			if (document.getElementById("domainduration").value == "1 year") {
				document.getElementById("setdomaincost").innerHTML = domain_website[0];
				domainCost = domain_website[0];
			}
			else if (document.getElementById("domainduration").value == "2 years") {
				document.getElementById("setdomaincost").innerHTML = domain_website[1];
				domainCost = domain_website[1];
			}
			else if (document.getElementById("domainduration").value == "3 years") {
				document.getElementById("setdomaincost").innerHTML = domain_website[2];
				domainCost = domain_website[2];
			}
		}

		else {
			alert("error in domain cost");
		}
	}


	function showHostingCost() {
		var host_cost = [70, 60, 40];//1month,12months,24months,48months
		if (document.getElementById("hostingduration").value == "1 year") {
			document.getElementById("sethostingcost").innerHTML = host_cost[1] * 12;
			document.getElementById("hostingRenewalCost").innerHTML = host_cost[1] * 12;
			hostingCost = host_cost[1] * 12;
		}
		else if (document.getElementById("hostingduration").value == "2 years") {
			document.getElementById("sethostingcost").innerHTML = host_cost[2] * 24;
			document.getElementById("hostingRenewalCost").innerHTML = host_cost[2] * 24;
			hostingCost = host_cost[2] * 24;
		}
		else if (document.getElementById("hostingduration").value == "4 years") {
			document.getElementById("sethostingcost").innerHTML = host_cost[3] * 48;
			document.getElementById("hostingRenewalCost").innerHTML = host_cost[3] * 48;
			hostingCost = host_cost[3] * 48;
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
			document.getElementById("domainRenewalCost").innerHTML = 0;
			document.getElementById("hostingRenewalCost").innerHTML = 0;
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