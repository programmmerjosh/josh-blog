!function(a){"use strict";a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=a(this.hash);if((e=e.length?e:a("[name="+this.hash.slice(1)+"]")).length)return a("html, body").animate({scrollTop:e.offset().top-70},1e3,"easeInOutExpo"),!1}}),a(".js-scroll-trigger").click(function(){a(".navbar-collapse").collapse("hide"),a("#find-out-more-modal").modal("hide")}),a("body").scrollspy({target:"#mainNav",offset:100});var e=function(){a("#mainNav").offset().top>100?a("#mainNav").addClass("navbar-shrink"):a("#mainNav").removeClass("navbar-shrink")};e(),a(window).scroll(e)}(jQuery),$(document).ready(function(){$("#testimonial-slider").owlCarousel({items:3,itemsDesktop:[1e3,3],itemsDesktopSmall:[979,2],itemsTablet:[768,2],itemsMobile:[650,1],pagination:!0,autoPlay:!0})});