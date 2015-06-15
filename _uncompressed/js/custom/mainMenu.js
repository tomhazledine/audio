var mainMenuToggle = $('.mainMenuToggle');
var mainMenu = $('.mainMenuWrapper');
var header = $('#mainHeader');

mainMenuToggle.on('click',function(){
    button = $(this);
    button.toggleClass('open');
    header.toggleClass('menuOpen');
    // if (button.hasClass('open')) {
    //     button.removeClass('open');
    //     mainMenu.removeClass('open');
    //     header.removeClass('tuckedUp');
    //     header.removeClass('mainMenuOpen');
    // } else {
    //     button.addClass('open');
    //     mainMenu.addClass('open');
    //     header.addClass('mainMenuOpen');
    // }
});