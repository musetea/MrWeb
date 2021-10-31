"use strict";
class Food {
    constructor() {
        this.$searchForm = document.querySelector(".search-form-container");
        console.log(this.$searchForm);
        const $serachBtn = document.querySelector("#search-btn");
        console.log($serachBtn);
        $serachBtn.addEventListener("click", this.searchToogle);
    }
    searchToogle(e) {
        this.$searchForm.classList.toggle('active');
    }
}
new Food();
