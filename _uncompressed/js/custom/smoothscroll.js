/**
 * --------------------
 * TRIGGER SMOOTHSCROLL
 *
 * When one of the menu
 * links is clicked, we
 * will smoothly scroll
 * to the top of target
 * element.
 * --------------------
 */

// Get the menu links
var internal_anchor_links = document.getElementsByClassName('internal-link');

// Add click event for each menu link.
for (var i = 0; i < internal_anchor_links.length; i++) {
    internal_anchor_links[i].addEventListener('click',internal_link_click);
}

// Menu link click event
function internal_link_click(e){
    
    // Stop the page from automatically jumping to the hash.
    e.preventDefault();
    
    // Get the href value.
    var target_href = this.attributes.href.nodeValue;
    
    // Strip the "#" from the href (turning it into a useable ID).
    var target_id = target_href.replace("#", "");
    
    // Use that ID to get our target element.
    var target = document.getElementById(target_id);
    
    // Scroll the page to the top of that element.
    smooth_scroll_to(document.body, target.offsetTop, 600);
}