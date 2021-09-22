"use strict";
class Grocery {
    constructor() {
        const _searchForm = document.querySelector("#search-form");
        this.$searchForm = new SearchForm(_searchForm);
        const _cart = document.querySelector(".header .shopping-cart");
        this.$shoppingCart = new ShoppingCart(_cart);
        const _loginForm = document.querySelector("#login-form");
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
        onscroll = () => {
            this._form.classList.remove("active");
            this.$btn.classList.remove("active");
        };
    }
}
;
class ShoppingCart {
    constructor(_cart) {
        this._cart = _cart;
        this.onShoppingCartClick = () => {
            this._cart.classList.toggle("active");
            this.$btn.classList.toggle("active");
        };
        this.onscroll = () => {
            this._cart.classList.remove("active");
            this.$btn.classList.remove("active");
        };
        this.$btn = document.querySelector("#cart-btn");
        this.$btn.addEventListener("click", this.onShoppingCartClick);
    }
}
// 로그인폼 
class LoginForm {
    constructor(_form) {
        this._form = _form;
        this.onLoginClick = () => {
            this._form.classList.toggle("active");
            this.$btn.classList.toggle("active");
        };
        this.$btn = document.querySelector("#login-btn");
        this.$btn.addEventListener("click", this.onLoginClick);
    }
}
new Grocery();
