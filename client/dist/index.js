"use strict";
const $closeButton = document.querySelector("#menu-bar");
const $navBar = document.querySelector("nav.navbar");
$closeButton === null || $closeButton === void 0 ? void 0 : $closeButton.addEventListener("click", () => {
    $closeButton.classList.toggle("fa-times");
    $navBar.classList.toggle("active");
});
