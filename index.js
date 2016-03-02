

(function($) {
  $.fn.countdown = function(options, callback) {
    thisEl = $(this); 
  
    var settings = { 
      'date': null,
      'format': null
    };

    if(options) {
      $.extend(settings, options);
    }
   
   //Countdown Attributes
   
    function countdown_proc() {
    var eventDate = Date.parse(settings.date) / 1000;
    var currentDate = Math.floor($.now() / 1000);
    
    if(eventDate <= currentDate) {
    callback.call(this);
    clearInterval(interval);
    }
      
    var seconds = eventDate - currentDate;
    
    var days = Math.floor(seconds / (60 * 60 * 24)); 
    //How many days
    
    seconds -= days * 60 * 60 * 24; 
    //Days
    
    var hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * 60 * 60; 
    //Hours
    
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60; 
    //Minutes
    
    if (days == 1) { thisEl.find(".timeRefDays").text("day"); } else { thisEl.find(".timeRefDays").text("days"); }
		    if (hours == 1) { thisEl.find(".timeRefHours").text("hour"); } else { thisEl.find(".timeRefHours").text("hours"); }
		    if (minutes == 1) { thisEl.find(".timeRefMinutes").text("minute"); } else { thisEl.find(".timeRefMinutes").text("minutes"); }
		    if (seconds == 1) { thisEl.find(".timeRefSeconds").text("second"); } else { thisEl.find(".timeRefSeconds").text("seconds"); }
    
    if(settings.format == "on") {
        days = (String(days).length >= 2) ? days : "0" + days;
        hours = (String(hours).length >= 2) ? hours : "0" + hours;
        minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
        seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
    }
    
    thisEl.find(".days").text(days);
    thisEl.find(".hours").text(hours);
    thisEl.find(".minutes").text(minutes);
    thisEl.find(".seconds").text(seconds);
  }

	countdown_proc();

	interval = setInterval(countdown_proc, 1000);
  };

}) (jQuery);

$("#countdown").countdown({
      date: "15 March 2016 12:00:00",
      
      format: "on"
      }, 
  
      function() {
       alert("Five Years");
       });
	   
	   
	 function setHeights() {
  var windowHeight = $(window).height();
  $('.slide').height(windowHeight);
}

setHeights();

$(window).resize(function() {
  setHeights();
});

function addSticky() {
  $('.slide').each(function() {
    var scrollerAnchor = $(this).offset().top;
    if (window.scrollY >= scrollerAnchor) {
      $(this).addClass('fix-it');
    } else {
      $(this).removeClass('fix-it');
    }
  });
}



$(window).scroll(function() {
  addSticky();
});  

$(function(){
	
	var $window = $(window);		
	
	var scrollTime = 1;			//Scroll time
	var scrollDistance = 170;		//Distance
		
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				autoKill: true,
				overwrite: 5							
			});
					
	});
  
  	
});

//Social media items
	
var SL = SL || {};
SL.Site = (function(){
	'use strict';
	$(document).on('ready', function(){
		
		var SocialLinks = {
			init: function () {
				this.bindUIActions();

				$('input, textarea').placeholder();
			},
			bindUIActions: function () {
        	var _this = this;

				$('.popup').on('click', function(e) {
					var src = $(this).attr('href');
					_this.popUpWindow(src);
					e.preventDefault();
				});
				
			},
			popUpWindow: function (url) {
				var
				newwindow,
				featuresArray = [],
				featuresString = '',
				windowFeatures = {
					toolbar: 'no',
					location: 'no',
					directories: 'no',
					left: ($(window).width() - 600) / 2,
					top: ($(window).height() - 300) / 2,
					status: 'no',
					menubar: 'no',
					scrollbars: 'yes',
					resizable: 'no',
					width: 600,
					height: 300
				};

				for(var k in windowFeatures) {
					featuresArray.push(k+'='+windowFeatures[k]);
				}

				featuresString = featuresArray.join(',');

				newwindow = window.open(url, 'name', featuresString);

				if (window.focus) {
					newwindow.focus();
				}
			}
		};

		SocialLinks.init();

	});

}());


