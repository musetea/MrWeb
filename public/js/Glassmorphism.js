"use strict";
class Glassmorphism {
    constructor() {
        this.MenuButtonClick = () => {
            this.$menuBtn.classList.toggle("fa-times");
            this.$navBar.classList.toggle("active");
        };
        this.onScroll = () => {
            this.$menuBtn.classList.remove("fa-times");
            this.$navBar.classList.remove("active");
        };
        this.$menuBtn = document.querySelector("#menu-btn");
        this.$navBar = document.querySelector(".header .navbar");
        // 함수영역
        this.$menuBtn.addEventListener("click", this.MenuButtonClick);
        // 
        window.onscroll = this.onScroll;
        // 
        setInterval(createBox, 400);
    }
}
const $bgGradient = document.querySelector(".gradient-background");
const createBox = () => {
    let span = document.createElement('span');
    span.classList.add('animated-box');
    const size = Math.random() * 80;
    span.style.height = 40 + size + 'px';
    span.style.width = 40 + size + 'px';
    span.style.top = Math.random() * innerHeight + 'px';
    span.style.left = Math.random() * innerWidth + 'px';
    $bgGradient.appendChild(span);
    setTimeout(() => {
        span.remove();
    }, 3000);
};
new Glassmorphism();
