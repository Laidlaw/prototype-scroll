// $('i.sidebar--toggle').click(function () {
//   $('this').addClass('close');
//   $(".sidebar").velocity({ left: "-300px" }, 500, "easeOutSine");
//   $(".wrapper").addClass('sidebar--hide');
// });

// $('i.toggle-sidebar').click(function () {
//   // console.log('test');
//     $(this).closest('.sidebar').css('left','-20%');
// });

window.fitText(document.querySelector('html'), 1);

$('.sidebar--toggle').on('click', function(){
    if( $('.sidebar').is(':visible') ) {
        $("*[data-animation='slide-left']").toggleClass('hide', 'show');
        // $('.wrapper').velocity({marginLeft: 'auto',}, 300, "spring");
    }
});



// $( document ).delegate( ".sidebar--toggle", "click", function() {
//   $("*[data-animation='slide-left']").velocity({left: "-300px"}, 500);
// });