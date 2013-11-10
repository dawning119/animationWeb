$(document).ready(function(){

	$('header#branding').mouseenter(function(){
		$(this).animate({opacity:"1.0"},'fast');
		$(this).animate({height:"50px"},'fast');
	})
	.mouseleave(function(){
		$(this).animate({opacity:"0.3"},'fast');
		$(this).animate({height:"40px"},'fast');
	});


	$('nav#primary a').hover(
		function () {
			$(this).prev('h1').css('visibility','visible');
		},
		function () {
			$(this).prev('h1').css('visibility','hidden');
		}
	);

	$('nav#primary a').click(function(){
		var index = $(this).parent().index();
		detectPage(index);
	});

	var rotateInterval;
	$(".leaf1").mouseenter(function(){
		var angle = 0;
		var self=$(this);
		rotateInterval=setInterval(function(){
      		angle+=10;
    		self.rotate(angle);
		},20);

	})
	.mouseleave(function(){
		$(this).rotate({
            duration:3000,
            angle: 0, 
            animateTo:360
        })
		clearInterval(rotateInterval);
	});
	var grassAngle=0;
	var orient=true;
	setInterval(function(){
      	if(orient==true){
      		
      		grassAngle+=0.5;
      		$(".grass").rotate({angle:grassAngle, center: ["50%", "100%"]});
      		if(grassAngle==10)
      			orient=false;
      	}
      	else{
      		grassAngle-=0.5;
      		$(".grass").rotate({angle:grassAngle, center: ["50%", "100%"]});
      		if(grassAngle==0)
      			orient=true;
      	}
    },50);
		
	
	
});


function detectPage(index){



	//var currentScroll = $(window).scrollTop();
	//var homepage_top = $('#homepage').offset().top;
	//var history_top = $('#history').offset().top;
	//var interest_top = $('#interest').offset().top;
	//var lookingFor_top = $('#lookingFor').offset().top;
	//alert (currentScroll);
	//if(index==0) 
	//	$('nav#primary').fadeOut('slow');
	//else
	//	$('nav#primary').fadeIn();

}