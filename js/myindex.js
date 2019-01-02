$('#game').click(function() {
    //var btn_value = $(this).attr('data-btn-name');
    $('.zoneMask').fadeIn(400);
    //$('[data-name="' + btn_value + '"]').show();
});

$('.btn_cancel').click(function() {
    $('.zoneMask').fadeOut(400);
    $('.zoneInfo__main').fadeOut(400);
});

$('.zoneclose').click(function() {
    $('.zoneMask').fadeOut(400);
    $('.zoneInfo__main').fadeOut(400);
});