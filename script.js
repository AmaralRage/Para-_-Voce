// function toggleColor() {
//    var card = document.getElementById('card');
//    card.classList.toggle('dark-mode');
// }


function toggleColor() {
    var icon = document.getElementById("icon");
    if (icon.classList.contains("fa-sun")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
}
