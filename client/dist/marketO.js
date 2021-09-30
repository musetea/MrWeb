"use strict";
class MarketIO {
    constructor() {
        // 메뉴클릭 
        this.OnMenuClick = (e) => {
            e.preventDefault();
            this.$menuBtn.classList.toggle("fa-times");
            this.$navBar.classList.toggle("active");
        };
        this.removeToggleMenu = () => {
            this.$menuBtn.classList.remove("fa-times");
            this.$navBar.classList.remove("active");
        };
        this.$menuBtn = document.querySelector("#menu-btn");
        this.$navBar = document.querySelector("header nav.navbar");
        this.$menuBtn.addEventListener("click", this.OnMenuClick);
        window.onscroll = () => {
            this.removeToggleMenu();
        };
    }
}
new MarketIO();
