// function toggleColor() {
  //  var card = document.getElementById('card');
    // card.classList.toggle('dark-mode');
 // }

function toggleColor() {
    var card = document.getElementById('card');
    var icon = document.getElementById("icon");
    card.classList.toggle('dark-mode');
    if (card.classList.contains('dark-mode')) {
        // Se o modo escuro estiver ativado, mude o ícone para uma lua
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        // Caso contrário, mantenha o ícone do sol
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
}
