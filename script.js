const card = document.getElementById("card");
const toggle = document.getElementById("toggleDark");

toggle.addEventListener("click", () => {
    card.classList.toggle("dark-mode");

    if (card.classList.contains("dark-mode")) {
        toggle.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png"; // ☀️
        toggle.title = "Modo claro";
    } else {
        toggle.src = "https://cdn-icons-png.flaticon.com/512/581/581601.png"; // 🌙
        toggle.title = "Modo escuro";
    }
});
