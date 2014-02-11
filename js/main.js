var	i = 0;								//   Global variable:
var	animationId;						//	 Using for all the animation
var	animationArray = new Array();		//	 automatically start and end.

$(document).ready(function(){

	detectPage();
	detectPage();

	//springAnimate();
	//----------Bind the nav events---------------
    $('nav#primary').localScroll({
        onAfter:detectPage
    });
    
    //----------Branding events-----------------
	$('header#branding').hover(
		function(){
			$(this).animate({opacity:"1.0"},'fast');
			$(this).animate({height:"50px"},'fast');
		},
		function(){
			$(this).animate({opacity:"0.3"},'fast');
			$(this).animate({height:"40px"},'fast');
		}
	);

	//----------Navagation events-----------------
	$('nav#primary a').hover(
		function () {
			$(this).prev('h1').css('visibility','visible');
		},
		function () {
			$(this).prev('h1').css('visibility','hidden');
		}
	);


	$('.nuts').click(function(){
		$(this).animate({top:"3000px"},'middle');
		$(this).rotate(30);
	});

});

//usage for easySlider
$(document).ready(function(){	
			$("#slider").easySlider({
				auto: true,
				continuous: true,
				nextId: "slider1next",
				prevId: "slider1prev"
			});

		});
		

function detectPage(){
			stopAnimation();
        	var currentScroll = $(window).scrollTop();
			var spring_top = $('#spring').offset().top;
			var summer_top = $('#summer').offset().top;
			var autumn_top = $('#autumn').offset().top;
			var winter_top = $('#winter').offset().top;
			var soil_top = $('#soil').offset().top;

			if(currentScroll<summer_top) {
				springAnimate();
			}
			else if(currentScroll>=summer_top&&currentScroll<autumn_top){
				summerAnimate();
			}
			else if(currentScroll>=autumn_top&&currentScroll<winter_top){ 
				autumnAnimate();
			}
			else if(currentScroll>=winter_top&&currentScroll<soil_top){
				winterAnimate();
			}
			else if(currentScroll>=soil_top){
				soilAnimate();
			}
}
	
var grassAngle=0;
	var orient=true;
	function grassEffect(){
      	if(orient==true){
      		
      		grassAngle+=0.4;
      		$(".grass").rotate({angle:grassAngle, center: ["50%", "100%"]});
      		if(grassAngle>10)
      			orient=false;
      	}
      	else{
      		grassAngle-=0.2;
      		$(".grass").rotate({angle:grassAngle, center: ["50%", "100%"]});
      		if(grassAngle<0)
      			orient=true;
      	}
	}


//----------------Spring page--------------------------
function springAnimate(){ 

	animationId = setInterval(grassEffect,50);

    animationArray[i]=animationId;
    i++;

    // rotating leaf animation
    var rotateInterval;
	$(".leaf1").hover(
		function(){
			var angle = 0;
			var self=$(this);
			rotateInterval=setInterval(function(){
	      		angle+=10;
	    		self.rotate(angle);
			},20);

	},
		function(){
			clearInterval(rotateInterval);
			$(this).rotate({
	            duration:3000,
	            angle: 0, 
	            animateTo:360
	        })
	});

	//door effect
	$("#door").hover(
		function(){
			$('#door_left').stop().animate({left:"-142px"},'slow');
			$('#door_right').stop().animate({right:"-142px"},'slow');
		},
		function(){
			$('#door_left').stop().animate({left:"0px"},'slow');
			$('#door_right').stop().animate({right:"2px"},'slow');
		}
	);



}	
//-------------------------Summer page--------------------------
function summerAnimate(){
	animationId = setInterval(grassEffect2,50);
	animationArray[i]=animationId;
    i++;
	var grassAngle=0;
	var orient=true;
	function grassEffect2(){
      	if(orient==true){
      		
      		grassAngle+=0.4;
      		$(".grasstest").rotate({angle:grassAngle, center: ["50%", "100%"]});
      		if(grassAngle>10)
      			orient=false;
      	}
      	else{
      		grassAngle-=0.2;
      		$(".grasstest").rotate({angle:grassAngle, center: ["50%", "100%"]});
      		if(grassAngle<0)
      			orient=true;
      	}
	}

}
//-------------------------Autumn page--------------------------

function autumnAnimate(){ }
//-------------------------Winter page--------------------------
function winterAnimate(){ }
//-------------------------Soil page--------------------------
function soilAnimate(){ }

//Stop all the animation when changing the page.
function stopAnimation(){

		for(; i > 0; i--){
  			clearInterval(animationArray[i-1]);                      
    	}                       
	

}