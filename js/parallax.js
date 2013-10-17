$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
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
    		scrollTop:$('#summer').offset().top
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
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h2').show();
		},
		function () {
			$(this).prev('h2').hide();
		}
    );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
//	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
//	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
//	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#summer').offset().top - (($('#autumn').offset().top - $('#summer').offset().top) / 2);
	var section3Top =  $('#autumn').offset().top - (($('#winter').offset().top - $('#autumn').offset().top) / 2);
	var section4Top =  $('#winter').offset().top - (($(document).height() - $('#winter').offset().top) / 2);;
	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.spring').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.summer').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.autumn').addClass('active');
	} else if ($(document).scrollTop() >= section4Top){
		$('nav#primary a.winter').addClass('active');
	}
	
}
