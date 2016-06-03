$('#screenshot-slider-lg').lightSlider({
  item: 1,
  controls: false,
});

$('#testimonial-slider').lightSlider({
  item: 1,
  controls: false,
});
$('#blog-slider').lightSlider({
  item: 1,
  controls: false,
});
$('.clickies_contactlist')
  .mouseover(function() {
    $(this).attr('src', '../img/features-contact-hover.png');
  })
  .mouseout(function() {
    $(this).attr('src', '../img/features-contact-normal.png');
});

$('.clickies_listen')
  .mouseover(function() {
    $(this).attr('src', '../img/features-listen-hover.png');
  })
  .mouseout(function() {
    $(this).attr('src', '../img/features-listen-normal.png');
});

$('.clickies_gallery')
  .mouseover(function() {
    $(this).attr('src', '../img/features-gal-hover.png');
  })
  .mouseout(function() {
    $(this).attr('src', '../img/features-gal-normal.png');
});
