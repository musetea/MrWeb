class PortPolio {

   constructor() {

      const $menu = document.querySelector("#menu-btn")! as HTMLDivElement;
      const $themeToggle = document.querySelector("#theme-toggler")! as HTMLDivElement;
      const $header = document.querySelector("header")! as HTMLElement;

      $menu.addEventListener("click", (e) => {
         $menu.classList.toggle("fa-times");
         $header.classList.toggle("active")
      });

      $themeToggle.addEventListener("click", (e) => {
         $themeToggle.classList.toggle("fa-sun");

         if ($themeToggle.classList.contains("fa-sun")) {
            document.body.classList.add("active");
         }
         else {
            document.body.classList.remove("active");
         }
      })

   }
}

new PortPolio();