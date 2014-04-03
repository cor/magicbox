$(document).ready(function (argument) {
	for (var i = 100 ; i >= 0; i--) {
		$(".box").animate({	
			"top" : "100%",
			"marginTop" : "-200px",
		} );
		$(".box").animate({
			"left" : "100%",
			"marginLeft" : "-200px",
		});
		$(".box").animate({
			"top" : "0%",
			"marginTop" : "0px",
		});
		$(".box").animate({
			"left" : "0%",
			"marginLeft" : "0px",
		});
	}
})