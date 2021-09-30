import Swiper from 'swiper';
class Restaurant {
    constructor() {
        this.SerchMenuClick = () => {
            this.$searchForm.classList.toggle("active");
        };
        this.SerchCloseMenuClick = () => {
            this.$searchForm.classList.remove("active");
        };
        this.MenuBarClick = () => {
            this.$menuBar.classList.toggle("fa-times");
            this.$navBar.classList.toggle("active");
        };
        this.loading = () => {
            this.$Loader.classList.add("fade-out");
        };
        this.fadeOut = () => {
            setInterval(this.loading, 3000);
        };
        this.OnScroll = () => {
            this.$menuBar.classList.remove("fa-times");
            this.$navBar.classList.remove("active");
        };
        console.log("Restaurant Clss Loading...");
        this.$navBar = document.querySelector("nav.navbar");
        this.$menuBar = document.querySelector("#menu-bars");
        this.$menuBar.addEventListener("click", this.MenuBarClick);
        this.$searchBar = document.querySelector("#search-icon");
        this.$searchClose = document.querySelector("#close");
        this.$searchForm = document.querySelector("#search-form");
        this.$searchBar.addEventListener("click", this.SerchMenuClick);
        this.$searchClose.addEventListener("click", this.SerchCloseMenuClick);
        this.$Loader = document.querySelector(".loader-container");
        window.onscroll = this.OnScroll;
        window.onload = this.fadeOut;
        const swiper = new Swiper('.home-slider', {
            // Optional parameters
            spaceBetween: 30,
            // centerSlides: true,
            loop: true,
            autoplay: {
                delay: 7500,
                disableOnInteraction: false,
            },
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
}
new Restaurant();
