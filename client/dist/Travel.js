"use strict";
class Travel {
    constructor() {
        this.$menuButton = document.querySelector("#menu-btn");
        this.$menuButton.addEventListener("click", (e) => {
            const $menuBar = document.querySelector(".header .navbar");
            $menuBar.classList.toggle("active");
        });
    }
}
new Travel();
