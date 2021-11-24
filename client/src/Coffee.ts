
class Coffee {

    private $navBar: HTMLElement;
    private $cartContainer: HTMLDivElement;
    private $searchForm: HTMLDivElement;

    constructor() {

        this.$navBar = document.querySelector(".header .navbar")! as HTMLElement;
        this.$cartContainer = document.querySelector(".cart-items-container")! as HTMLDivElement;
        this.$searchForm = document.querySelector(".search-form")! as HTMLDivElement;

        const $menuBtn = document.querySelector("#menu-btn")! as HTMLLinkElement;
        $menuBtn.addEventListener("click", (e) => {
            this.$navBar.classList.toggle("active");
            this.$cartContainer.classList.remove("active");
            this.$searchForm.classList.remove("active");
        });

        const $cartBtn = document.querySelector("#cart-btn")! as HTMLLinkElement;
        $cartBtn.addEventListener("click", (e) => {
            this.$cartContainer.classList.toggle("active");
            this.$navBar.classList.remove("active");
            this.$searchForm.classList.remove("active");
        });

        const $searchBtn = document.querySelector("#search-btn")! as HTMLLinkElement;
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