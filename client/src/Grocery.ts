class Grocery {
    private $searchForm: SearchForm;

    constructor() {

        const _searchForm = document.querySelector("#search-form")! as HTMLFormElement;
        this.$searchForm = new SearchForm(_searchForm);

    }
};

class SearchForm {
    private $btn: HTMLDivElement;
    constructor(private _form: HTMLFormElement) {
        this.$btn = document.querySelector("#search-btn")! as HTMLDivElement;

        this.$btn.addEventListener("click", this.onSearchClick);
    }

    private onSearchClick = () => {
        this._form.classList.toggle("active");
        this.$btn.classList.toggle("active");
    }
}


new Grocery();