$(document).ready(function(){
	$('nav#primary a').hover(
		function(){
			$(this).prev('h2').show();
		},
		function () {
			$(this).prev('h2').hide();
		});
});
