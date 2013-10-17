$(document).ready(function(){

	redrawDotNav();

    $(window).bind('scroll',function(){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.spring').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.summer').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#spring').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.autumn').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#autumn').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.winter').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#winter').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });

	$('nav#primary a').hover(
		function(){
			$(this).prev('h2').show();
		},
		function () {
			$(this).prev('h2').hide();
		});

});

function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg').css('top',(0-(scrolled*.25))+'px');
	//$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	//$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}
function redrawDotNav(){
	var springTop = 0;
	// The top of each section is offset by half the distance to the previous section.
	var summerTop =  $('#summer').offset().top;
	var autumnTop =  $('#autumn').offset().top;
	var winterTop =  $('#winter').offset().top；
	$('nav#primary a').removeClass('active');

	if( $(document).scrollTop()>= springTop && $(document).scrollTop() < summerTop){
		$('nav#primary a.spring').addClass('active');
	} else if ($(document).scrollTop() >= summerTop && $(document).scrollTop() < autumnTop){
		$('nav#primary a.summer').addClass('active');
	} else if ($(document).scrollTop()>= autumnTop && $(document).scrollTop() < winterTop){
		$('nav#primary a.autumn').addClass('active');
	} else if ($(document).scrollTop()>= winterTop){
		$('nav#primary a.winter').addClass('active');
	}
	
}

