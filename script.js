// function modoEscuro() {
  //  var card = document.getElementById('card');
    // card.classList.toggle('dark-mode');
 // }

function toggleDarkMode() {
    const card = document.querySelector('.card');
    const luaIcon = document.querySelector('.lua');
    const solIcon = document.querySelector('.sol');

    card.classList.toggle('dark-mode');
    luaIcon.classList.toggle('hidden');
    solIcon.classList.toggle('hidden');
}
