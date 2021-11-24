"use strict";
class Coffee {
    constructor() {
        this.$navBar = document.querySelector(".header .navbar");
        this.$cartContainer = document.querySelector(".cart-items-container");
        this.$searchForm = document.querySelector(".search-form");
        const $menuBtn = document.querySelector("#menu-btn");
        $menuBtn.addEventListener("click", (e) => {
            this.$navBar.classList.toggle("active");
            this.$cartContainer.classList.remove("active");
            this.$searchForm.classList.remove("active");
        });
        const $cartBtn = document.querySelector("#cart-btn");
        $cartBtn.addEventListener("click", (e) => {
            this.$cartContainer.classList.toggle("active");
            this.$navBar.classList.remove("active");
            this.$searchForm.classList.remove("active");
        });
        const $searchBtn = document.querySelector("#search-btn");
        $searchBtn.addEventListener("click", (e) => {
            this.$searchForm.classList.toggle("active");
            this.$navBar.classList.remove("active");
            this.$cartContainer.classList.remove("active");
        });
        window.addEventListener("scroll", (e) => {
            this.$navBar.classList.remove("active");
            this.$cartContainer.classList.remove("active");
            this.$searchForm.classList.remove("active");
        });
    }
}
new Coffee();
