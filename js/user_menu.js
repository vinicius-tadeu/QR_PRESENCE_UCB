function openMenu() {
    var menu = document.getElementById('menu-extension');
    var menu_state = window.getComputedStyle(menu);
    if (menu_state.getPropertyValue('display') == 'none') {
        menu.style.display = 'flex';
        menu.style.visibility = 'visible';
        menu.style.pointerEvents = 'all';
        menu.style.animation = 'menuWidthOpen forwards .5s';
    } else if (menu_state.getPropertyValue('display') == 'flex') {
        menu.style.animation = 'menuWidthClose forwards .5s';
        setTimeout(() => {
            menu.style.visibility = 'hidden';
            menu.style.pointerEvents = 'none';
            menu.style.display = 'none';
        }, "300");
    }
}