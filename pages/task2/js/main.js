// $(document).ready(function () {
//     var modal = $('.popup'),
//     overlay = $('.overlay'),
//     link = $('button[data-popup="true"]'),
//     close = $('.close-btn');

//     link.on('click',(
//         function(){
//             overlay.show();
//             modal.show();
//             modal.addClass('popup_active');
//         }
//     ));

//     close.click(function(){
//         overlay.hide();
//         modal.removeClass('popup_active');
//     });
// });

// $(document).ready(function () {
//     var modal = $('.popup'),
//     overlay = $('.overlay'),
//     link = $('button[data-popup="true"]'),
//     close = $('.close-btn'),
//     fruitName = $('.fruit-name');
    
//     link.on('click',(
//         function(){
//             fruitName.text($(this).attr('data-fruit'));
//             overlay.show();
//             modal.addClass('popup_active');
//         }
//     ));

//     close.click(function(){
//         overlay.hide();
//         modal.removeClass('popup_active');
//     });

// });

$(document).ready(function () {
    var modal = $('.popup'),
    overlay = $('.overlay'),
    link = $('button[data-popup="true"]'),
    close = $('.close-btn'),
    fruitName = $('.fruit-name');
    
    link.on('click',(
        function(){
            fruitName.text($(this).attr('data-fruit'));
            overlay.show();
            modal.addClass('popup_active');
        }
    ));

    close.click(function(){
        overlay.hide();
        modal.removeClass('popup_active');
    });

});