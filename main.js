$('.menu-toggle').on('click', function() {

  $('.menu').toggleClass('open')

  if ($('.menu').hasClass('open')) {
    $('.toggle-text').text('Hide menu')
  } else {
    $('.toggle-text').text('Show menu')
  }

})
