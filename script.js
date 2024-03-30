function modoEscuro() {
    var card = document.getElementById('card');
    if (card.classList.contains('dark-mode')) {
        card.classList.remove('dark-mode');
    } else {
        card.classList.add('dark-mode');
    }
}
