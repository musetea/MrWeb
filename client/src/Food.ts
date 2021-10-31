class Food {
    private $searchForm: HTMLElement;
    constructor() {

        this.$searchForm = document.querySelector(".search-form-container")! as HTMLElement;
        console.log(this.$searchForm);
        const $serachBtn = document.querySelector("#search-btn")! as HTMLDivElement;
        console.log($serachBtn);
        $serachBtn.addEventListener("click", this.searchToogle);


    }

    private searchToogle(e: MouseEvent) {
        this.$searchForm.classList.toggle('active');
    }
}

new Food();