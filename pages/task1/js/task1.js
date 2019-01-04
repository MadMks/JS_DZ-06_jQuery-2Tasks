
$(document).ready(function () {

    $('#btnPopupShow').click(function (e) { 
        $('.popup').addClass('popup_active');
    });

    $('#btnClose').click(function(){
        $('.popup').removeClass('popup_active');
    });

});