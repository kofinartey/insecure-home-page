let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".nav-menu");




hamburger.addEventListener("click", function () {
    console.log("ham clicked")
    if (hamburger.classList.contains("hamburger__open")) {
        hamburger.classList.remove("hamburger__open");
        menu.classList.remove("nav-menu-show");
    } else {
        hamburger.classList.add("hamburger__open");
        menu.classList.add("nav-menu-show");
    }
})