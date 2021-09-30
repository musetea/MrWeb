import Swiper from 'swiper';

class Restaurant {
   private $Loader: HTMLDivElement;
   private $menuBar: HTMLElement;
   private $navBar: HTMLElement;
   private $searchBar: HTMLElement;
   private $searchClose: HTMLElement;
   private $searchForm: HTMLFormElement;
   constructor() {
      console.log("Restaurant Clss Loading...")

      this.$navBar = document.querySelector("nav.navbar")! as HTMLElement;
      this.$menuBar = document.querySelector("#menu-bars")! as HTMLElement;
      this.$menuBar.addEventListener("click", this.MenuBarClick);

      this.$searchBar = document.querySelector("#search-icon")! as HTMLElement;
      this.$searchClose = document.querySelector("#close")! as HTMLElement;
      this.$searchForm = document.querySelector("#search-form")! as HTMLFormElement;
      this.$searchBar.addEventListener("click", this.SerchMenuClick);
      this.$searchClose.addEventListener("click", this.SerchCloseMenuClick);

      this.$Loader = document.querySelector(".loader-container")! as HTMLDivElement;

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

   private SerchMenuClick = () => {
      this.$searchForm.classList.toggle("active");
   }
   private SerchCloseMenuClick = () => {
      this.$searchForm.classList.remove("active");
   }

   private MenuBarClick = () => {
      this.$menuBar.classList.toggle("fa-times");
      this.$navBar.classList.toggle("active");
   };


   private loading = () => {
      this.$Loader.classList.add("fade-out");
   }
   private fadeOut = () => {
      setInterval(this.loading, 3000)
   }
   private OnScroll = () => {
      this.$menuBar.classList.remove("fa-times");
      this.$navBar.classList.remove("active");
   }
}


new Restaurant();

