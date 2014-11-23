$(document).ready(function(){
	var element = $('#fixy');
	var navTopPos = $(element).offset().top;

	$(window).scroll(function(event){
		var y = $(this).scrollTop();

		// if y position is greater than the navtop position, then need to make it fixed position and top=0
			if (y>=navTopPos){
				element.css({"position" : "fixed", "top" : "0", "bottom" : ""});
			}
			else{
				element.css({"position" : "absolute", "bottom" : "0", "top" : ""});
			}

		// else need to convert it back to absolute and bottom -0
	});
});


