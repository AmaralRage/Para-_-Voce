const card = document.getElementById("card");
const toggle = document.getElementById("toggleDark");

toggle.addEventListener("click", () => {
    card.classList.toggle("dark-mode");

    // opcional: inverter cor do ícone
    toggle.classList.toggle("white-icon");
});
