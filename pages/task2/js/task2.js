$(function(){
    var tab = $('a[data-toggle="tab"]');

    tab.on('click', function () {
        // event.preventDefault();
        $('.main-tabs .active').removeClass('active');
        $(this).parent().toggleClass('active');

        var target = $(this).attr('href');
        $(target).toggleClass('active');
    });
});