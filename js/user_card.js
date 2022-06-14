function openCardPerfil() {
    var blur = document.getElementById('card-blur');
    var blur_state = window.getComputedStyle(blur);
    var card = document.getElementById('card-wrapper');
    var card_menu = document.getElementById('menu-extension');
    if (blur_state.getPropertyValue('filter') == 'blur(2px)') {
        blur.style.filter = 'blur(0px)';
        blur.style.display = 'contents';
        card.style.display = 'none';
    } else if (blur_state.getPropertyValue('filter') == 'blur(0px)') {
        blur.style.filter = 'blur(2px)';
        blur.style.display = 'block'
        card.style.display = 'flex';
        card_menu.style.display = 'none';
    }
}

function closeCardPerfil() {
    var blur = document.getElementById('card-blur');
    var card = document.getElementById('card-wrapper');
    blur.style.filter = 'blur(0px)';
    blur.style.display = 'contents';
    card.style.display = 'none';
}