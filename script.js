function modoEscuro() {
    const card = document.querySelector('.card');
    const luaIcon = document.querySelector('.lua');
    const solIcon = document.querySelector('.sol');

    card.classList.toggle('dark-mode');
    luaIcon.classList.toggle('hidden');
    solIcon.classList.toggle('hidden');
    solIcon.classList.toggle('white-icon');
}
