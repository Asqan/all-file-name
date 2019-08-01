jQuery(window).scroll(function () {
  var sticky = jQuery('.mobile-menu'),
    scroll = jQuery(window).scrollTop();

  if (scroll >= 40) {
    sticky.addClass('fixed');
  } else {
    sticky.removeClass('fixed');

  }
});