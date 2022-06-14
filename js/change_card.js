function openChangePassword() {
    var change = document.getElementById('change-card');
    var blur = document.getElementById('card-blur')
    change.style.visibility = 'visible';
    change.style.pointerEvents = 'all';
    blur.style.filter = 'blur(2px)';
    blur.style.display = 'block';

}

function closeChangePassword() {
    var change = document.getElementById('change-card');
    var blur = document.getElementById('card-blur')
    change.style.visibility = 'hidden';
    change.style.pointerEvents = 'none';
    blur.style.filter = 'blur(2px)';
    blur.style.display = 'contents';
}