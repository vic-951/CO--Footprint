document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("nav-menu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
});

