class MarketIO {

   private $menuBtn: HTMLDivElement;
   private $navBar: HTMLElement;
   constructor() {
      this.$menuBtn = document.querySelector("#menu-btn")! as HTMLDivElement;
      this.$navBar = document.querySelector("header nav.navbar")! as HTMLElement;

      this.$menuBtn.addEventListener("click", this.OnMenuClick);

      window.onscroll = () => {
         this.removeToggleMenu();
      }
   }


   // 메뉴클릭 
   private OnMenuClick = (e: MouseEvent) => {
      e.preventDefault();
      this.$menuBtn.classList.toggle("fa-times");
      this.$navBar.classList.toggle("active");
   }

   private removeToggleMenu = () => {
      this.$menuBtn.classList.remove("fa-times");
      this.$navBar.classList.remove("active");
   }
}

new MarketIO();