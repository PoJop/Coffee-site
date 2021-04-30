$(document).ready(function() {
    $('.menu_icon_button').click(function(event){
        $('.list__wrapper').toggleClass('active')
        $('.menu_icon_button').toggleClass('active')
        $('html').toggleClass('lock')
    });
});
