var did_scroll = false;
var last_scroll_top = 0;
var min_scroll_threshold = 5;

var header = document.getElementById('mainHeader');
var navbar = document.getElementById('mainMenu');
var header_placeholder = document.getElementById('headerPlaceholder');
var header_height = header.offsetHeight;
var navbar_height = navbar.offsetHeight;
var target_height = header_height - navbar_height;

// When the window scrolls, make a note of it.
window.addEventListener('scroll', function(e) {
    did_scroll = true;
});

// Check scroll-state every 0.25 seconds (a very
// primitive attempt at a "debounce").
setInterval(function() {
    if (did_scroll) {
        // If the page has scrolled, trigger the scroll function.
        has_scrolled();
        did_scroll = false;
    }
}, 250);


function has_scrolled() {
    var scroll_top = document.body.scrollTop;

    // Only continue if the page has scrolled further than min_scroll_threshold
    if ( Math.abs( last_scroll_top - scroll_top ) <= min_scroll_threshold ) {
        return;
    }

    // If they scrolled down and are past the navbar, add class .tuckedUp.
    // This is necessary so you never see what is "behind" the navbar.
    if (scroll_top > target_height ){
        // Scroll Down
        noQuery.addClass(header,'tuckedUp');
        noQuery.addClass(header_placeholder,'tuckedUp');
    } else {
        // Scroll Up
        noQuery.removeClass(header,'tuckedUp');
        noQuery.removeClass(header_placeholder,'tuckedUp');
    }

    last_scroll_top = scroll_top;
}