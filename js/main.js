
$('#screenshot-slider').lightSlider({
  item: 1,
  controls: false,
});
$('#screenshot-slider-sm').lightSlider({
  item: 1,
  controls: false,
});
$('#testimonial-slider').lightSlider({
  item: 1,
  controls: false,
});
$('#testimonial-slider-sm').lightSlider({
  item: 1,
  controls: false,
});
$('#blog-slider').lightSlider({
  item: 1,
  controls: false,
});

$('.clickies-contactlist img')
  .mouseover(function() {
    $(this).attr('src', 'https://dnets.github.io/olivia/img/features-contact-hover.png');
  })
  .mouseout(function() {
    $(this).attr('src', 'https://dnets.github.io/olivia/img/features-contact-normal.png');
});

$('.clickies-music img')
  .mouseover(function() {
    $(this).attr('src', 'https://dnets.github.io/olivia/img/features-listen-hover.png');
  })
  .mouseout(function() {
    $(this).attr('src', 'https://dnets.github.io/olivia/img/features-listen-normal.png');
});

$('.clickies-gallery img')
  .mouseover(function() {
    $(this).attr('src', 'https://dnets.github.io/olivia/img/features-gal-hover.png');
  })
  .mouseout(function() {
    $(this).attr('src', 'https://dnets.github.io/olivia/img/features-gal-normal.png');
});

// Smooth scrolling
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
