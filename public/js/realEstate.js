"use strict";
class RealEstate {
    constructor() {
        /**
         * 상단 메뉴바 클릭
         */
        this.MenuBarClick = () => {
            this.$menuBar.classList.toggle("fa-times");
            this.$navBar.classList.toggle("active");
        };
        this.$menuBar = document.querySelector("#menu-bars");
        this.$navBar = document.querySelector("header .navbar");
        this.$menuBar.addEventListener("click", this.MenuBarClick);
        window.onscroll = () => {
            this.$menuBar.classList.remove("fa-times");
            this.$navBar.classList.remove("active");
        };
    }
}
new RealEstate();
