(function() {
  $(function() {
    var $animation_elements, $selector, $window, checkIfInView, checkScroolToTopBtn, handleScrollTopClick, init;
    $selector = $('.return-to-top');
    $window = $(window);
    $animation_elements = $('.animation-element');
    checkIfInView = function() {
      var inViewClass, windowBottomPosition, windowHeight, windowTopPosition;
      windowHeight = $window.height();
      windowTopPosition = $window.scrollTop();
      windowBottomPosition = windowTopPosition + windowHeight;
      inViewClass = 'in-view';
      $.each($animation_elements, function() {
        var $element, elementBottomPosition, elementHeight, elementTopPosition;
        $element = $(this);
        elementHeight = $element.outerHeight();
        elementTopPosition = $element.offset().top;
        elementBottomPosition = elementTopPosition + elementHeight;
        if (elementBottomPosition >= windowTopPosition && elementTopPosition <= windowBottomPosition) {
          $element.addClass(inViewClass);
        } else {
          $element.removeClass(inViewClass);
        }
      });
    };
    checkScroolToTopBtn = function() {
      if ($(this).scrollTop() > 100) {
        return $selector.fadeIn();
      } else {
        return $selector.fadeOut();
      }
    };
    handleScrollTopClick = function() {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
    };
    init = function() {
      return checkIfInView();
    };
    $window.on('scroll', checkIfInView);
    $window.on('scroll', checkScroolToTopBtn);
    $selector.on('click', handleScrollTopClick);
    init();
  });

}).call(this);

//# sourceMappingURL=coffee.js.map
