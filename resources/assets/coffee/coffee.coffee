$ ->
  $selector = $('.return-to-top')
  $window = $(window)
  $animation_elements = $('.animation-element')

  #Check if animated element is in view
  checkIfInView = ->
    windowHeight = $window.height()
    windowTopPosition = $window.scrollTop()
    windowBottomPosition = windowTopPosition + windowHeight
    inViewClass = 'in-view'
    $.each $animation_elements, ->
      $element = $(this)
      elementHeight = $element.outerHeight()
      elementTopPosition = $element.offset().top
      elementBottomPosition = elementTopPosition + elementHeight
      #check to see if this current container is within viewport
      if elementBottomPosition >= windowTopPosition and elementTopPosition <= windowBottomPosition
        $element.addClass inViewClass
      else
        $element.removeClass inViewClass
      return
    return

  #Check if need to show/hide scrool to top button
  checkScroolToTopBtn = ->
    if $(this).scrollTop() > 100
      $selector.fadeIn()
    else
      $selector.fadeOut()

  #Handle scroll to top click event
  handleScrollTopClick = ->
    $('html, body').animate { scrollTop: 0 }, 800
    false

  #Initializations
  init = ->
    checkIfInView()

  #Events
  $window.on 'scroll', checkIfInView
  $window.on 'scroll', checkScroolToTopBtn
  $selector.on 'click', handleScrollTopClick

  init()

  return
