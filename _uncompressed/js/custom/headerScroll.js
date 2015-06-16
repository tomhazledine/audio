var didScroll;
var lastScrollTop = 0;
var delta = 5;

var header = $('#mainHeader');
var navbarHeight = 100;//header.outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var scrollTop = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - scrollTop) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .tuckedUp.
    // This is necessary so you never see what is "behind" the navbar.
    if (scrollTop > navbarHeight){
        // Scroll Down
        header.addClass('tuckedUp');
    } else {
        // Scroll Up
        header.removeClass('tuckedUp');
    }

    lastScrollTop = scrollTop;
}