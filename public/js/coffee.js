(function(){$(function(){var n,o,t,i,e,r,l;o=$(".return-to-top"),t=$(window),n=$(".animation-element"),i=function(){var o,i,e,r;e=t.height(),r=t.scrollTop(),i=r+e,o="in-view",$.each(n,function(){var n,t,e,l;n=$(this),e=n.outerHeight(),l=n.offset().top,t=l+e,t>=r&&i>=l?n.addClass(o):n.removeClass(o)})},e=function(){return $(this).scrollTop()>100?o.fadeIn():o.fadeOut()},r=function(){return $("html, body").animate({scrollTop:0},800),!1},l=function(){return i()},t.on("scroll",i),t.on("scroll",e),o.on("click",r),l()})}).call(this);