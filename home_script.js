$(document).ready(function() {

	var interval;

	$("body").hide();
	$("body").fadeIn(3000);

	function intervalFun() {

		interval = setInterval(changeBackColor, 10000);

	}

	function changeBackColor() {

		$("body").animate({backgroundColor: "#68EBD4"}, 2000);

 		// This doesn't work properly
		/* $("body").hide();
		$("body").css("background-color", "#68EBD4");
		$("body").fadeIn(2000); */ 

	}

	intervalFun();

});