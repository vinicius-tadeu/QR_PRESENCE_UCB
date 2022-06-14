var o_aberto = document.getElementById('olho_aberto');
var o_fechado = document.getElementById('olho_fechado');
var input_senha = document.getElementById('input_senha');

function olhoAberto() {
    var fechado_status = window.getComputedStyle(o_fechado);
    if (fechado_status.getPropertyValue('display') == 'none') {
        o_aberto.style.display = "none";
        o_fechado.style.display = "block";
        input_senha.type = "text";
    }
}

function olhoFechado() {
    var aberto_status = window.getComputedStyle(o_aberto);
    if (aberto_status.getPropertyValue('display') == 'none') {
        o_aberto.style.display = "block";
        o_fechado.style.display = "none";
        input_senha.type = "password";
    }
}