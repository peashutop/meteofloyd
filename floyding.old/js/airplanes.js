function onYouTubePlayerReady(playerId) {
  ytplayer = document.getElementById(playerId); //("mylucasplayer");
  ytplayer.addEventListener("onStateChange", "onYouTubePlayerStateChange");
}

function onYouTubePlayerStateChange(newState) {
  //console.log("Player's new state: " + newState);
  if( newState == 5) {   // video cued
    ytplayer.playVideo();  
  } 
  else if( newState == 0 ) { //video ended
     $("#testimonial-slides").cycle("resume");
     $("#testimonial-slides").cycle("next");
   }
}

$.fn.blink = function(time) {
    var time = typeof time == 'undefined' ? 200 : time;
    $(this).hide(0).delay(time).show(0);
}


function calculateTestimonialsTimeout(currElement, nextElement, opts, isForward) { 
  var index = opts.currSlide; 
  //console.log( $(currElement).attr("className"));
  if( $(nextElement).attr("className") == "video-slide" ) {
  //console.log("video coming next! pausing slideshow...");
    $("#testimonial-slides").cycle("pause");  
  }
  return 6000; 
} 

function animateSlideshow() {
	var containerLeft = $("#container").offset().left;
	$("#slide-banner").animate(
	    {
	   left:containerLeft 
	 },
	 {  duration: 7000,
	    complete: function() {
	         $("#slides").cycle("resume").cycle("next");
	       }
	 }
	,"linear");
}

$(function() {
  $("#slides").cycle({   
     fx:      'uncover', //fade 
     speed:    1500,
     timeout:  6000,
     nowrap: true,
     end: function() {
       animateIntroAirplaneExit();
     }
  }).cycle("pause");
  var t=setTimeout("animateSlideshow()",2000);
  //showTestimonialAirplanePeekingOut();
});


$(function() {
	
  $("#mercy").click(function() {
    animateTestimonialAirplaneExit();
  });

  $('#testimonials .airplane').click(function() {
    animateTestimonialAirplaneEntry(); 
  });

  $('#slide-banner .airplane').click(function() {
    animateSlideshow();
  });

});

$(function() {
  $("#intro-mercy").click(function() {
	animateIntroAirplaneExit();
  });
});  

function animateIntroAirplaneExit() {
  var windowRight = $(window).width();
  $("#slide-banner").animate(
  {
    left:windowRight 
  },
  { duration: 4000,
    complete: function() {
      $(this).remove(); //remove slide banner from DOM
      //showTestimonialAirplanePeekingOut();
      //$(".content-etsy").blink();
    }
  }
  , "linear"
  );	
}