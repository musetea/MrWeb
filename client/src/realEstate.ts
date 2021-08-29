
class RealEstate {

   private $menuBar: HTMLDivElement;
   private $navBar: HTMLElement;

   constructor() {
      this.$menuBar = document.querySelector("#menu-bars")! as HTMLDivElement;
      this.$navBar = document.querySelector("header .navbar")! as HTMLElement;


      this.$menuBar.addEventListener("click", this.MenuBarClick);

      window.onscroll = () => {
         this.$menuBar.classList.remove("fa-times");
         this.$navBar.classList.remove("active");
      }
   }


   /**
    * 상단 메뉴바 클릭 
    */
   private MenuBarClick = () => {
      this.$menuBar.classList.toggle("fa-times");
      this.$navBar.classList.toggle("active");
   };
}

new RealEstate();