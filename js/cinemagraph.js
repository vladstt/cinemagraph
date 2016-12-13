$('.ui.accordion').accordion();
$('.projects-trigger').popup({
  on: 'click'
});

$('.show-user-settings').click(function() {
  $('.user-settings').modal({
    blurring: true
  })
  .modal('show')
});

$('.video.cards .image').dimmer({
  on: 'hover'
});