
// Syntax-highlighting for code blocks.
hljs.initHighlightingOnLoad();

// Initialize Picobel
Picobel( { theme: 'basicPlayer' } );

// Trigger Smoothscroll

var internal_anchor_links = document.getElementsByClassName('internal-link');

console.log(internal_anchor_links);
for (var i = 0; i < internal_anchor_links.length; i++) {
    internal_anchor_links[i].addEventListener('click',internal_link_click);
    // console.log(internal_anchor_links[i].attributes.href);
}

function internal_link_click(e){
    e.preventDefault();
    var target_href = this.attributes.href.nodeValue;
    var target_id = target_href.replace("#", "");
    var target = document.getElementById(target_id);
    console.log(target);
    console.log(target.offsetTop);
    smooth_scroll_to(target, target.offsetTop, 600);
}