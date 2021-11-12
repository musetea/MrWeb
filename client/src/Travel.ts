

class Travel {

    private $menuButton: HTMLDivElement;

    constructor() {
        this.$menuButton = document.querySelector("#menu-btn")! as HTMLDivElement;

        this.$menuButton.addEventListener("click", (e) => {

            const $menuBar = document.querySelector(".header .navbar")! as HTMLElement;
            $menuBar.classList.toggle("active");
        })



    }
}


new Travel();