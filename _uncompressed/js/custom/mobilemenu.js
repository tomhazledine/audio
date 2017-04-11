var menu_toggle = document.getElementById('mainMenuToggle');
var menu = document.getElementById('mainHeader');

menu_toggle.addEventListener('click',toggle_menu);

function toggle_menu(e){
    console.log('toggling menu');
    var is_toggled = noQuery.hasClass(this,'open');
    console.log(is_toggled);
    if ( is_toggled ) {
        noQuery.removeClass(this,'open');
        noQuery.removeClass(menu,'menuOpen');
    } else {
        noQuery.addClass(this,'open');
        noQuery.addClass(menu,'menuOpen');
    }
}