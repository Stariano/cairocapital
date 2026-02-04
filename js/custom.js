var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
jQuery(document).ready(function($) {
      "use strict";

  // ______________ RESPONSIVE MENU
  $('#navigation').superfish({
    delay: 300,
    animation: {
      opacity: 'show',
      height: 'show'
    },
    speed: 'fast',
    dropShadows: false
  });

  $(function() {
    $('#navigation').slicknav({
      label: "MENU",
      closedSymbol: "&#8594;",
      openedSymbol: "&#8595;"
    });
  });

  // ______________ FIXED MENU AT SCROLL

var nav = $('.header-navigation');
if ($(window).width() > 767) {
  $(window).scroll(function () {
   if ($(this).scrollTop() > 200) {
     nav.addClass("f-nav fadeindown");
   } else {
     nav.removeClass("f-nav fadeindown");
   }
 });
}


  // ______________ ANIMATE EFFECTS
var wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: false
});
wow.init();

// ______________ SEARCH FORM OVERLAY
$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });

    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
});

// ______________ TOOLTIPS
    $('[data-toggle="tooltip"]').tooltip();

// ______________ ACCORDION ICONS
   $('.collapse').on('show.bs.collapse', function(){
    var i = $(this).parent().find('i')
    i.toggleClass('fa-plus-square-o fa-minus-square-o');
  }).on('hide.bs.collapse', function(){
    var i = $(this).parent().find('i')
    i.toggleClass('fa-minus-square-o fa-plus-square-o');
  });

 // ______________ BACK TO TOP BUTTON
 $(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
    $('#back-to-top').fadeIn('slow');
  } else {
    $('#back-to-top').fadeOut('slow');
  }
});
 $('#back-to-top').on('click', function(event) {
  $("html, body").animate({
    scrollTop: 0
  }, 600);
  return false;
});
});

}

/*
     FILE ARCHIVED ON 23:58:17 Dec 04, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:17:45 Jan 23, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.551
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.009
  esindex: 0.012
  cdx.remote: 15.85
  LoadShardBlock: 102.06 (3)
  PetaboxLoader3.datanode: 143.525 (5)
  load_resource: 158.306 (2)
  PetaboxLoader3.resolve: 88.903 (2)
*/