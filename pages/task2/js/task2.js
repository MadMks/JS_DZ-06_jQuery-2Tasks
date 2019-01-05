$(function(){
    var tab = $('a[data-toggle="tab"]');

    var top = $('.main-nav').outerHeight();
    $('.tabs-content').css('top', top);

    tab.on('click', function () {
        $('.main-tabs .active').removeClass('active');
        $(this).toggleClass('active');

        var target = $(this).attr('href');
        $(target).toggleClass('active');
    });
});