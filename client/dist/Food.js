"use strict";
class Food {
    constructor() {
        // SECTION
        this.$searchForm = document.querySelector(".search-form-container");
        const $serachBtn = document.querySelector("#search-btn");
        $serachBtn.addEventListener("click", (e) => {
            this.$searchForm.classList.toggle('active');
            this.$cartContainer.classList.remove("active");
            this.$loginContainer.classList.remove("active");
            this.$menuBar.classList.remove('active');
        });
        // 카트 
        this.$cartContainer = document.querySelector(".shopping-cart-container");
        const $cartBtn = document.querySelector("#cart-btn");
        $cartBtn.addEventListener("click", (e) => {
            this.cartContainerToogle(e);
        });
        // 로그인
        this.$loginContainer = document.querySelector(".login-form-container");
        const $logintBtn = document.querySelector("#login-btn");
        $logintBtn.addEventListener("click", (e) => {
            this.loginContainerToogle(e);
        });
        // 메뉴바 
        this.$menuBar = document.querySelector("nav.navbar");
        const $menuBtn = document.querySelector("#menu-btn");
        $menuBtn.addEventListener("click", (e) => {
            this.menuBarToogle(e);
        });
        window.addEventListener("scroll", (e) => {
            this.$cartContainer.classList.remove('active');
            this.$searchForm.classList.remove("active");
            this.$loginContainer.classList.remove("active");
            this.$menuBar.classList.remove('active');
        });
        // HOME
        this.$home = document.querySelector(".home");
        const $parallaHome = document.querySelector(".home .home-parallax-img");
        this.$home.addEventListener("mouseover", (e) => {
            let x = (window.innerWidth - e.pageX * 2) / 90;
            let y = (window.innerHeight - e.pageY * 2) / 90;
            const style = `translateX(${y}px) translateY(${x}px)`;
            $parallaHome.style.transform = style;
        });
        this.$home.addEventListener("mouseleave", (e) => {
            const style = `translateX(${0}px) translateY(${0}px)`;
            $parallaHome.style.transform = style;
        });
    }
    // 카트
    cartContainerToogle(e) {
        this.$cartContainer.classList.toggle('active');
        this.$searchForm.classList.remove("active");
        this.$loginContainer.classList.remove("active");
        this.$menuBar.classList.remove('active');
    }
    // 로그인
    loginContainerToogle(e) {
        this.$loginContainer.classList.toggle('active');
        this.$cartContainer.classList.remove('active');
        this.$searchForm.classList.remove("active");
        this.$menuBar.classList.remove('active');
    }
    // 메뉴바 
    menuBarToogle(e) {
        this.$menuBar.classList.toggle('active');
        this.$loginContainer.classList.remove('active');
        this.$cartContainer.classList.remove('active');
        this.$searchForm.classList.remove("active");
    }
}
new Food();
