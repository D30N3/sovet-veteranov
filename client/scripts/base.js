// Burger Button
const burger = document.getElementById("burger-button");
const menu = document.getElementById("mobile-menu");

const overlay = document.createElement("div");
overlay.id = "menu-overlay";
document.body.appendChild(overlay);

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});