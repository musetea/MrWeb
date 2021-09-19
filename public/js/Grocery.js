"use strict";
class Grocery {
    constructor() {
        const _searchForm = document.querySelector("#search-form");
        this.$searchForm = new SearchForm(_searchForm);
    }
}
;
class SearchForm {
    constructor(_form) {
        this._form = _form;
        this.onSearchClick = () => {
            this._form.classList.toggle("active");
            this.$btn.classList.toggle("active");
        };
        this.$btn = document.querySelector("#search-btn");
        this.$btn.addEventListener("click", this.onSearchClick);
    }
}
new Grocery();
