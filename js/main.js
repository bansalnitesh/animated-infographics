/* jslint browser: true */
/* global $, TweenMax, window, Power2, Back */

// hides all screens except for screen 1
$("section:gt(0)").hide();
        
// set initial screen number
var screenNum = 1;
// transition duration
var duration = 1;
// delay for starting screen animations
// initially set to 3s to allow the preloader to show and then updated in loadScreen1
var delay = 4;

// hide/show navigation functions
function hideNav() {
    TweenMax.to(".next", 0.25, {
        right: -100,
        ease: Power2.easeOut
    });
    
    TweenMax.to(".prev", 0.25, {
        left: -100,
        ease: Power2.easeOut
    });
}

function showNav() {
    TweenMax.to(".next", 0.25, {
        right: 20,
        ease: Power2.easeOut
    });
    
    TweenMax.to(".prev", 0.25, {
        left: 20,
        ease: Power2.easeOut
    });
}

// next and previous navigation functions
function showNextScreen()
{
    // targets the current screen
    var currentScreen = "#screen" + screenNum;
    // sets next screen number
    screenNum++;
    // targets the next screen
    var nextScreen = "#screen" + screenNum;
    // transition out navigation
    hideNav();
    // transitions current screen out
    TweenMax.fromTo(currentScreen, duration, {
        x: 0
    }, {
        delay: 0.5,
        x: -960,
        ease: Power2.easeInOut
    });
    // shows next screen
    $(nextScreen).show();
    // transitions next screen in
    TweenMax.fromTo(nextScreen, duration, {
        x: 960
    }, {
        delay: 0.5,
        x: 0,
        ease: Power2.easeInOut,
        onComplete: function() {
            // hide current screen
            $(currentScreen).hide();
            // transition on navigation
            showNav();
        }
    });
    
    // load function to animate on contents of screen
    window["loadScreen" + screenNum]();
	
	 // stop voiceover from playing
     $("#voiceover").trigger("pause");
}

function showPrevScreen()
{
    // targets the current screen
    var currentScreen = "#screen" + screenNum;
    // sets next screen number
    screenNum--;
    // targets the next screen
    var prevScreen = "#screen" + screenNum;
    // transition out navigation
    hideNav();
    // transitions current screen out
    TweenMax.fromTo(currentScreen, duration, {
        x: 0
    }, {
        delay: 0.5,
        x: 960,
        ease: Power2.easeInOut
    });
    // shows previous screen
    $(prevScreen).show();
    // transitions next screen in
    TweenMax.fromTo(prevScreen, duration, {
        x: -960
    }, {
        delay: 0.5,
        x: 0,
        ease: Power2.easeInOut,
        onComplete: function() {
            // hide current screen
            $(currentScreen).hide();
            // transition on navigation
            showNav();
        }
    });
    
    // load function to animate on contents of screen
    window["loadScreen" + screenNum]();
	
	// stop voiceover from playing
    $("#voiceover").trigger("pause");
}

// next and previous button clicks
$(".next").click(showNextScreen);
$(".prev").click(showPrevScreen);

// LOAD SCREEN AUDIO ///////////////////////////////////////////
// LOAD SCREEN AUDIO ///////////////////////////////////////////
function loadScreenAudio()
{
    $("#voiceover").attr("src", "audio/screen" + screenNum + ".mp3");
    $("#voiceover").trigger("play");
}

// SET UP MAIN INTERFACE ///////////////////////////////////////
// fade on main div on page load and hide loading gif
TweenMax.from("main", duration, {
    delay: delay - 1,
	opacity: 0,
    x: $(window).height(),
    ease: Back.easeOut,
    onComplete: function() {
        $("#loading").hide();
		
		 
        // set volume of BG music to zero
        $("#background").prop("volume", 0);
        // play BG music
        $("#background").trigger("play");
        // fade in BG music to 50% volume
         $("#background").animate({volume: 1}, 2000);
    }
});

// CONTROL BACKGROUND AUDIO ////////////////////////////////////
$("#playPause").click(function() {
	
	if ($(this).hasClass("pause"))
	{
		$("#background").trigger("pause");
		$(this).removeClass("pause").addClass("play");
	}
	else
	{
		$("#background").trigger("play");
		$(this).removeClass("play").addClass("pause");
		
		}
	});


// functions for loading on content of each screen
// LOAD SCREEN 1 ///////////////////////////////////////////////
function loadScreen1()
{
    TweenMax.from("#screen1 h1", duration, {
        delay: delay,
        opacity: 0
    });
    
    // update delay to wait for screen transition
    delay = duration + 0.5;
	
	 // start voiceover
        TweenMax.delayedCall(delay + 1, loadScreenAudio);
    
	
	//animating the reason for hovers	
	$("#reason1").hover(function(){
	TweenMax.to(this, 0.5, {
		width: 100,
		height: 100,
		borderRadius: 100,
		padding: 10,
		ease: Power2.easeOut
	});
	
	TweenMax.to("#reason1content", 0.5, {
		delay: 0.15,
		opacity: 1
	});
	
	// apply sound effect
        $("#swoosh1").trigger("play");
	
}, function() {
	TweenMax.to("#reason1content", 0.5, {
		opacity: 0
	});
	TweenMax.to(this, 0.5, {
		delay: 0.15,
		width: 50,
		height: 50,
		borderRadius: 50,
		ease: Power2.easeIn
	});
});
	$("#reason2").hover(function(){
	TweenMax.to(this, 0.5, {
		width: 100,
		height: 100,
		borderRadius: 100,
		ease: Power2.easeOut
	});
	
	TweenMax.to("#reason2content", 0.5, {
		delay: 0.15,
		opacity: 1
	});
}, function() {
	TweenMax.to("#reason2content", 0.5, {
		opacity: 0
	});
	TweenMax.to(this, 0.5, {
		delay: 0.15,
		width: 50,
		height: 50,
		borderRadius: 50,
		ease: Power2.easeIn
	});
});
	$("#reason3").hover(function(){
	TweenMax.to(this, 0.5, {
		width: 100,
		height: 100,
		borderRadius: 100,
		ease: Power2.easeOut
	});
	
	TweenMax.to("#reason3content", 0.5, {
		delay: 0.15,
		opacity: 1
	});
}, function() {
	TweenMax.to("#reason3content", 0.5, {
		opacity: 0
	});
	TweenMax.to(this, 0.5, {
		delay: 0.15,
		width: 50,
		height: 50,
		borderRadius: 50,
		ease: Power2.easeIn
	});
});
	$("#reason4").hover(function(){
	TweenMax.to(this, 0.5, {
		width: 100,
		height: 100,
		borderRadius: 100,
		ease: Power2.easeOut
	});
	
	TweenMax.to("#reason4content", 0.5, {
		delay: 0.15,
		opacity: 1
	});
}, function() {
	TweenMax.to("#reason4content", 0.5, {
		opacity: 0
	});
	TweenMax.to(this, 0.5, {
		delay: 0.15,
		width: 50,
		height: 50,
		borderRadius: 50,
		ease: Power2.easeIn
	});
});
	$("#reason5").hover(function(){
	TweenMax.to(this, 0.5, {
		width: 100,
		height: 100,
		borderRadius: 100,
		ease: Power2.easeOut
	});
	
	TweenMax.to("#reason5content", 0.5, {
		delay: 0.15,
		opacity: 1
	});
}, function() {
	TweenMax.to("#reason5content", 0.5, {
		opacity: 0
	});
	TweenMax.to(this, 0.5, {
		delay: 0.15,
		width: 50,
		height: 50,
		borderRadius: 50,
		ease: Power2.easeIn
	});
});
	$("#reason6").hover(function(){
	TweenMax.to(this, 0.5, {
		width: 100,
		height: 100,
		borderRadius: 100,
		ease: Power2.easeOut
	});
	
	TweenMax.to("#reason6content", 0.5, {
		delay: 0.15,
		opacity: 1
	});
}, function() {
	TweenMax.to("#reason6content", 0.5, {
		opacity: 0
	});
	TweenMax.to(this, 0.5, {
		delay: 0.15,
		width: 50,
		height: 50,
		borderRadius: 50,
		ease: Power2.easeIn
	});
});
	TweenMax.from("#screen1 h3", duration, {
        delay: delay + 1.5,
		opacity: 0,
		y: 30
    });
	 // apply sound effect
    TweenMax.delayedCall(delay + 1.5, function() {
        $("#pop1").trigger("play");
    });
	TweenMax.from("#screen1 h4", duration, {
        delay: delay + 2,
		opacity: 0,
		y: 30

    });
	 // apply sound effect
    TweenMax.delayedCall(delay + 2, function() {
        $("#pop1").trigger("play");
    });
	TweenMax.from("#screen1 h5", duration, {
        delay: delay + 2.5,
		opacity: 0,
		y: 30
    });
	 // apply sound effect
    TweenMax.delayedCall(delay + 2.5, function() {
        $("#pop1").trigger("play");
    });
	TweenMax.from("#screen1 h6", duration, {
        delay: delay + 3,
		opacity: 0,
		y: 30
    });
	 // apply sound effect
    TweenMax.delayedCall(delay + 3, function() {
        $("#pop1").trigger("play");
    });
	TweenMax.from("#screen1 h7", duration, {
        delay: delay + 3.5,
		opacity: 0,
		y: 30
    });
	 // apply sound effect
    TweenMax.delayedCall(delay + 3.5, function() {
        $("#pop1").trigger("play");
    });
	TweenMax.from("#screen1 h8", duration, {
        delay: delay + 4,
		opacity: 0,
		y: 30
    });
	 // apply sound effect
    TweenMax.delayedCall(delay + 4, function() {
        $("#pop1").trigger("play");
    });
	TweenMax.from("#screen1 h9", duration, {
        delay: delay + 4.5,
		opacity: 0,
		y: 30
    });
	 // apply sound effect
    TweenMax.delayedCall(delay + 4.5, function() {
        $("#pop1").trigger("play");
    });
	
}

// animate on content of screen 1 on page load
loadScreen1();

// LOAD SCREEN 2 ///////////////////////////////////////////////
function loadScreen2()
{
    // animate content on with delays
    TweenMax.from("#screen2 h1", duration, {
        delay: delay,
        opacity: 0
    });
    
	TweenMax.from("#ele1", duration,{
		delay: delay + 0.25,
		scale: 0,
		ease: Power2.easeOut
		});
	
	$("#ele1 img").hover(function(){
	// apply sound effect
    $("#s2-1").trigger("play");
}, function() {
	// apply sound effect
    $("#s2-1").trigger("pause");
});
TweenMax.from("#ele2", duration,{
		delay: delay + 0.5,
		scale: 0,
		ease: Power2.easeOut
	});
$("#ele2 img").hover(function(){
	TweenMax.to("#ele2content", 0.5, {
		delay: 0.15,
		width: 250,
		opacity: 1,
		
	});
	// apply sound effect
    $("#s2-2").trigger("play");
}, function() {
	TweenMax.to("#ele2content", 0.5, {
		opacity: 0
	});
	// apply sound effect
    $("#s2-2").trigger("pause");
});
TweenMax.from("#ele3", duration,{
		delay: delay + 0.75,
		scale: 0,
		ease: Power2.easeOut
	});

	$("#ele3 img").hover(function(){
	TweenMax.to("#ele3content", 0.5, {
		delay: 0.15,
		width: 250,
		opacity: 1,
		
	});
	// apply sound effect
        $("#s2-3").trigger("pause");
}, function() {
	TweenMax.to("#ele3content", 0.5, {
		opacity: 0
	});
	// apply sound effect
        $("#s2-3").trigger("pause");
});
	TweenMax.from("#ele4", duration,{
		delay: delay + 1,
		scale: 0,
		ease: Power2.easeOut
		});

	$("#ele4 img").hover(function(){
	TweenMax.to("#ele4content", 0.5, {
		delay: 0.15,
		width: 250,
		opacity: 1,
		
	});
	// apply sound effect
        $("#s2-4").trigger("play");
}, function() {
	TweenMax.to("#ele4content", 0.5, {
		opacity: 0
	});
	// apply sound effect
        $("#s2-4").trigger("pause");
});
	TweenMax.from("#ele5", duration,{
		delay: delay + 1.25,
		scale: 0,
		ease: Power2.easeOut
		});

	$("#ele5 img").hover(function(){
	TweenMax.to("#ele5content", 0.5, {
		delay: 0.15,
		width: 250,
		opacity: 1,
		
	});
	// apply sound effect
        $("#s2-5").trigger("play");
}, function() {
	TweenMax.to("#ele5content", 0.5, {
		opacity: 0
	});
	// apply sound effect
        $("#s2-5").trigger("pause");
});
TweenMax.from("#ele6", duration,{
		delay: delay + 1.5,
		scale: 0,
		ease: Power2.easeOut
		});

$("#ele6 img").hover(function(){
	TweenMax.to("#ele6content", 0.5, {
		delay: 0.15,
		width: 250,
		height: 200,
		opacity: 1,
		
	});
	// apply sound effect
        $("#s2-6").trigger("play");
}, function() {
	TweenMax.to("#ele6content", 0.5, {
		opacity: 0
	});
	// apply sound effect
        $("#s2-6").trigger("pause");
});
$("#ele5img").hover(function(){
	TweenMax.to("#ele5content", 0.5, {
		delay: 0.15,
		width: 250,
		height: 200,
		opacity: 1,
		
	});
	// apply sound effect
        $("#s2-5").trigger("play");
}, function() {
    TweenMax.to("#ele5content", 0.5, {
		opacity: 0
	});
	// apply sound effect
        $("#s2-5").trigger("pause");
});
}

// LOAD SCREEN 3 ///////////////////////////////////////////////
function loadScreen3()
{
    // animate content on with delays
    TweenMax.from("#screen3 h1", duration, {
        delay: delay,
        opacity: 0
    });
	TweenMax.from("#elea", duration, {
        delay: delay + 0.5,
        opacity: 0,
		scale: 0,
		ease: Power2.easeOut
    });
	TweenMax.from("#eleb", duration, {
        delay: delay + 0.7,
        opacity: 0,
		scale: 0,
		ease: Power2.easeOut
    });
	TweenMax.from("#elec", duration, {
        delay: delay + 0.9,
        opacity: 0,
		scale: 0,
		ease: Power2.easeOut
    });
    TweenMax.from("#eled", duration, {
        delay: delay + 1.1,
        opacity: 0,
		scale: 0,
		ease: Power2.easeOut
    });
	 
	TweenMax.from("#ele7", duration, {
        delay: delay + .25,
        y: 600,
		 ease: Power2.easeOut
    });
	$("#ele7").hover(function () {

        TweenMax.to(this, 2, {
            scaleX: 1.1,
            scaleY: 1.1,
            ease: Circ.easeOut
        });

        // apply sound effect

        $("#s3-1").trigger("play");



    }, function () {

        TweenMax.to(this, 2, {
            scaleX: 1,
            scaleY: 1,
            ease: Circ.easeOut
        });


        // apply sound effect

        $("#s3-1").trigger("pause");


    });
	
	TweenMax.from("#ele7a", duration, {
        delay: delay + .5,
        y: 600,
		 ease: Power2.easeOut
    });
	$("#ele7a").hover(function () {

        TweenMax.to(this, 2, {
            scaleX: 1.1,
            scaleY: 1.1,
            ease: Circ.easeOut
        });

        // apply sound effect

        $("#s3-2").trigger("play");



    }, function () {

        TweenMax.to(this, 2, {
            scaleX: 1,
            scaleY: 1,
            ease: Circ.easeOut
        });


        // apply sound effect

        $("#s3-2").trigger("pause");


    });
	
	TweenMax.from("#ele7b", duration, {
        delay: delay + .75,
        y: -900,
		 ease: Power2.easeOut
    });
	$("#ele7b").hover(function () {

        TweenMax.to(this, 2, {
            scaleX: 1.1,
            scaleY: 1.1,
            ease: Circ.easeOut
        });

        // apply sound effect

        $("#s3-3").trigger("play");



    }, function () {

        TweenMax.to(this, 2, {
            scaleX: 1,
            scaleY: 1,
            ease: Circ.easeOut
        });


        // apply sound effect

        $("#s3-3").trigger("pause");


    });
	
	


}
// LOAD SCREEN 4 ///////////////////////////////////////////////
function loadScreen4()
{
    // animate content on with delays
    TweenMax.from("#screen4 h1", duration, {
        delay: delay,
        opacity: 0
    });
	TweenMax.from("#ele10", duration, {
        delay: delay + 0.25,
		opacity: 0,
        y: -600,
		 ease: Power2.easeOut
    });
	$("#ele10").hover(function () {

        TweenMax.to(this, 2, {
            scaleX: 1.1,
            scaleY: 1.1,
        });

        // apply sound effect

        $("#s4-1").trigger("play");



    }, function () {

        TweenMax.to(this, 2, {
            scaleX: 1,
            scaleY: 1,
            ease: Circ.easeOut
        });


        // apply sound effect

        $("#s4-1").trigger("pause");


    });
	TweenMax.from("#ele11", duration, {
        delay: delay + 0.35,
		opacity: 0,
        y: 200,
		 ease: Power2.easeOut
    });
	$("#ele11").hover(function () {

        TweenMax.to(this, 2, {
            scaleX: 1.1,
            scaleY: 1.1,
            ease: Circ.easeOut
        });

        // apply sound effect

        $("#s4-2").trigger("play");



    }, function () {

        TweenMax.to(this, 2, {
            scaleX: 1,
            scaleY: 1,
            ease: Circ.easeOut
        });


        // apply sound effect

        $("#s4-2").trigger("pause");


    });
	TweenMax.from("#ele12", duration, {
        delay: delay + 0.5,
		opacity: 0,
        x: 960,
		 ease: Power2.easeOut
    });
	$("#ele12").hover(function () {

        TweenMax.to(this, 2, {
            scaleX: 1.1,
            scaleY: 1.1,
            ease: Circ.easeOut
        });

        // apply sound effect

        $("#s4-3").trigger("play");



    }, function () {

        TweenMax.to(this, 2, {
            scaleX: 1,
            scaleY: 1,
            ease: Circ.easeOut
        });


        // apply sound effect

        $("#s4-3").trigger("pause");


    });
	TweenMax.from("#ele9", duration, {
        delay: delay + .10,
        opacity: 0,
        y: -200,
		 ease: Power2.easeOut
    });
	$("#ele9").hover(function () {

        TweenMax.to(this, 2, {
            scaleX: 1.1,
            scaleY: 1.1,
            ease: Circ.easeOut
        });

        // apply sound effect

        $("#s4-4").trigger("play");



    }, function () {

        TweenMax.to(this, 2, {
            scaleX: 1,
            scaleY: 1,
            ease: Circ.easeOut
        });


        // apply sound effect

        $("#s4-4").trigger("pause");


    });
	TweenMax.from("#ele12a", duration, {
        delay: delay + .5,
		opacity: 0,
        x: -960,
		 ease: Power2.easeOut
    });
	
	$("#ele12a").hover(function () {

        TweenMax.to(this, 2, {
            scaleX: 1.1,
            scaleY: 1.1,
            ease: Circ.easeOut
        });

        // apply sound effect

        $("#s4-5").trigger("play");



    }, function () {

        TweenMax.to(this, 2, {
            scaleX: 1,
            scaleY: 1,
            ease: Circ.easeOut
        });


        // apply sound effect

        $("#s4-5").trigger("pause");


    });

	
}


// LOAD SCREEN 5 ///////////////////////////////////////////////
function loadScreen5()
{
    // animate content on with delays
    TweenMax.from("#screen5 h1", duration, {
        delay: delay,
        opacity: 0
    });
	
	TweenMax.from("#ele13", duration, {
        delay: delay + 0.25,
		opacity: 0,
        x: -960,
		 ease: Power2.easeOut
    });
	$("#ele13").hover(function () {

        TweenMax.to(this, 2, {
            scaleX: 1.1,
            scaleY: 1.1,
            ease: Circ.easeOut
        });

        // apply sound effect

        $("#s5-1").trigger("play");



    }, function () {

        TweenMax.to(this, 2, {
            scaleX: 1,
            scaleY: 1,
            ease: Circ.easeOut
        });


        // apply sound effect

        $("#s5-1").trigger("pause");


    });
	TweenMax.from("#ele14", duration, {
        delay: delay + 0.5,
		opacity: 0,
        y: -960,
		 ease: Power2.easeOut
    });
	$("#ele14").hover(function () {

        TweenMax.to(this, 2, {
            scaleX: 1.1,
            scaleY: 1.1,
            ease: Circ.easeOut
        });

        // apply sound effect

        $("#s5-2").trigger("play");



    }, function () {

        TweenMax.to(this, 2, {
            scaleX: 1,
            scaleY: 1,
            ease: Circ.easeOut
        });


        // apply sound effect

        $("#s5-2").trigger("pause");


    });
	TweenMax.from("#ele14b", duration, {
        delay: delay + 0.75,
		opacity: 0,
        x: 960,
		 ease: Power2.easeOut
    });
	$("#ele14b").hover(function () {

        TweenMax.to(this, 2, {
            scaleX: 1.1,
            scaleY: 1.1,
            ease: Circ.easeOut
        });

        // apply sound effect

        $("#s5-3").trigger("play");



    }, function () {

        TweenMax.to(this, 2, {
            scaleX: 1,
            scaleY: 1,
            ease: Circ.easeOut
        });


        // apply sound effect

        $("#s5-3").trigger("pause");


    });
	TweenMax.from("#ele13a", duration, {
        delay: delay + 1,
		opacity: 0,
        y: 960,
		 ease: Power2.easeOut
    });
	$("#ele13a").hover(function () {

        TweenMax.to(this, 2, {
            scaleX: 1.1,
            scaleY: 1.1,
            ease: Circ.easeOut
        });

        // apply sound effect

        $("#s5-4").trigger("play");



    }, function () {

        TweenMax.to(this, 2, {
            scaleX: 1,
            scaleY: 1,
            ease: Circ.easeOut
        });


        // apply sound effect

        $("#s5-4").trigger("pause");


    });
	
	//open/close overlay content
	$("#ele13").click(function() {
		
		$("#ele13content").show();
		
		TweenMax.fromTo("#ele13content", 0.5, {
			opacity: 0
		},{
			opacity: 1
		});
		
	});
	
	$("#ele13content .close").click(function() {
		
		TweenMax.fromTo("#ele13content", 0.5, {
			opacity: 1
		},{
			opacity: 0,
			onComplete: function(){
				$("#ele13content").hide();
			}
		});
	});
	
	$("#ele14").click(function() {
		
		$("#ele14content").show();
		
		TweenMax.fromTo("#ele14content", 0.5, {
			opacity: 0
		},{
			opacity: 1
		});
		
	});
	
	$("#ele14content .close").click(function() {
		
		TweenMax.fromTo("#ele14content", 0.5, {
			opacity: 1
		},{
			opacity: 0,
			onComplete: function(){
				$("#ele14content").hide();
			}
		});
	});
	
	$("#ele13a").click(function() {
		
		$("#ele13acontent").show();
		
		TweenMax.fromTo("#ele13acontent", 0.5, {
			opacity: 0
		},{
			opacity: 1
		});
		
	});
	
	$("#ele13acontent .close").click(function() {
		
		TweenMax.fromTo("#ele13acontent", 0.5, {
			opacity: 1
		},{
			opacity: 0,
			onComplete: function(){
				$("#ele13acontent").hide();
			}
		});
	});
	$("#ele14b").click(function() {
		
		$("#ele14bcontent").show();
		
		TweenMax.fromTo("#ele14bcontent", 0.5, {
			opacity: 0
		},{
			opacity: 1
		});
		
	});
	
	$("#ele14bcontent .close").click(function() {
		
		TweenMax.fromTo("#ele14bcontent", 0.5, {
			opacity: 1
		},{
			opacity: 0,
			onComplete: function(){
				$("#ele14bcontent").hide();
			}
		});
	});
	
    
}

// LOAD SCREEN 6 ///////////////////////////////////////////////
function loadScreen6()
{
    // animate content on with delays
    TweenMax.from("#screen6 h1", duration, {
        delay: delay,
        opacity: 0
    });
    TweenMax.from("#ele15", duration, {
        delay: delay + duration,
        opacity: 0
    });
	TweenMax.from("#link1", duration, {
        delay: delay + .25,
        opacity: 0,
		x: -100,
		 ease: Power2.easeOut
    });
	TweenMax.from("#link2", duration, {
        delay: delay + .5,
        opacity: 0,
		x: 100,
		 ease: Power2.easeOut
    });
	TweenMax.from("#link3", duration, {
        delay: delay + .75,
        opacity: 0,
		x: -100,
		 ease: Power2.easeOut
    });
	TweenMax.from("#link4", duration, {
        delay: delay + 1,
        opacity: 0,
		x: 100,
		 ease: Power2.easeOut
    });
    
	TweenMax.to("#ele15", duration, {
		ease: Power2.easeInOut
    });
}