function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

$(document).ready(function (argument) {
	for (var i = 100 ; i >= 0; i--) {
		$(".box").animate({	
			"top" : "100%",
			"marginTop" : "-200px",

			"borderRadius" : "+=50px",
			'backgroundColor': "red"
		} );
		$(".box").animate({
			"left" : "100%",
			"marginLeft" : "-200px",

			"borderRadius" : "-=50px",
			'backgroundColor': "blue"
		});
		$(".box").animate({
			"top" : "0%",
			"marginTop" : "0px",
			'backgroundColor': "yellow",

			"borderRadius" : "+=50px",
		});
		$(".box").animate({
			"left" : "0%",
			"marginLeft" : "0px",
			'backgroundColor': "green",

			"borderRadius" : "-=50px",
		});
	}



	/* 
		if (randomAnimation == 1) {
			$(".box").animate({	
				"top" : "100%",
				"marginTop" : "-200px",
			} );
		};
		
		if (randomAnimation == 2) {
			$(".box").animate({
				"left" : "100%",
				"marginLeft" : "-200px",
			});
		}
		
		if (randomAnimation == 3) {
			$(".box").animate({
				"top" : "0%",
				"marginTop" : "0px",
			});
		}
		
		if (randomAnimation == 4) {
			$(".box").animate({
				"left" : "0%",
				"marginLeft" : "0px",
			});
		}
*/


})