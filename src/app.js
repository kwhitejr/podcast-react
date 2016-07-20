$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function() {
  var movementStrength = 25;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $(".slider-row").mousemove(function(e){
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;
    $('.slider-row').css("background-position", newvalueX+"px     "+newvalueY+"px");
  });
});

function windowPopup(url, width, height) {
  // Calculate the position of the popup so
  // it’s centered on the screen.
  var left = (screen.width / 2) - (width / 2),
      top = (screen.height / 2) - (height / 2);

  window.open(
    url,
    "",
    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
  );
}

$(".js-social-share").on("click", function(e) {
  e.preventDefault();

  windowPopup($(this).attr("href"), 500, 300);
});

// Vanilla JavaScript
// var jsSocialShares = document.querySelectorAll(".js-social-share");
// if (jsSocialShares) {
//   [].forEach.call(jsSocialShares, function(anchor) {
//     anchor.addEventListener("click", function(e) {
//       e.preventDefault();

//       windowPopup(this.href, 500, 300);
//     });
//   });
// }

// var BackgroundScroll = function(params) {
//   params = $.extend({
//     scrollSpeed: 70
//   }, params);

//   var step = 1,
//     current = 0,
//     restartPosition = - (params.imageWidth - params.imageHeight);

//   var scroll = function() {
//     current -= step;
//     if (current == restartPosition){
//       current = 0;
//     }
//     $('.slider-row').css('backgroundPosition', current + 'px 0');
//   };

//   this.init = function() {
//     setInterval(scroll, params.scrollSpeed);
//   };
// };

// var scroll = new BackgroundScroll();
// scroll.init();


var backgroundArr = [
  "http://blogs.revistaestilo.net/lacocinanomuerde/files/2016/02/coffee-cup.jpg",
  "http://cdn2.rosannadavisonnutrition.com/wp-content/uploads/2015/03/coffee.jpg"
];
// var i = 0;
// function cycleImage() {
//   $('.slider-row').css({
//     'background': 'url(' + backgroundArr[i] + ")"
//   });
//   i = i + 1;
//   if (i == backgroundArr.length) {
//     i = 0;
//   }
// }

// setInterval(cycleImage, 5000);
// cycleImage();

// function cycleImages(){
//   var $active = $('#background_cycler .active');
//   var $next = ($('#background_cycler .active').next().length > 0) ? $('#background_cycler .active').next() : $('#background_cycler img:first');
//   $next.css('z-index',2);//move the next image up the pile
//   $active.fadeOut(1500,function(){//fade out the top image
//   $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
//     $next.css('z-index',3).addClass('active');//make the next image the top one
//     });
//   }

// $(window).load(function(){
// $('#background_cycler').fadeIn(1500);//fade the background back in once all the images are loaded
//   // run every 7s
//   setInterval('cycleImages()', 7000);
// })