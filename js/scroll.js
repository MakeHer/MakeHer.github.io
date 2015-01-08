$(document).ready(function(){
	var elementBar = $('#fixy');
	var elementLogo = $('#logo');
	var navTopPos = $(elementBar).offset().top;

	$(window).scroll(function(event){
		var y = $(this).scrollTop();

		// if y position is greater than the navtop position, then need to make it fixed position and top=0
			if (y>=navTopPos){
				elementBar.css({"position" : "fixed", "top" : "0", "bottom" : ""});
				elementLogo.css({"position" : "fixed","top":"-200px","bottom":""})
			}
			else{	
				elementBar.css({"position" : "absolute", "bottom" : "0", "top" : ""})
				elementLogo.css({"position" : "absolute", "bottom" : "0", "top" : ""});
			}

		// else need to convert it back to absolute and bottom -0
	});
});


