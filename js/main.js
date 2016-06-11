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
    $(this).attr('src', '../img/features-contact-hover.png');
  })
  .mouseout(function() {
    $(this).attr('src', '../img/features-contact-normal.png');
});

$('.clickies-music img')
  .mouseover(function() {
    $(this).attr('src', '../img/features-listen-hover.png');
  })
  .mouseout(function() {
    $(this).attr('src', '../img/features-listen-normal.png');
});

$('.clickies-gallery img')
  .mouseover(function() {
    $(this).attr('src', '../img/features-gal-hover.png');
  })
  .mouseout(function() {
    $(this).attr('src', '../img/features-gal-normal.png');
});
