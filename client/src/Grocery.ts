class Grocery {
    private $searchForm: SearchForm;
    private $shoppingCart: ShoppingCart;
    private $loginForm: LoginForm;
    private $naviGation: NavigationBar;

    constructor() {

        const _searchForm = document.querySelector("#search-form")! as HTMLFormElement;
        this.$searchForm = new SearchForm(_searchForm);

        const _cart = document.querySelector(".header .shopping-cart")! as HTMLDivElement;
        this.$shoppingCart = new ShoppingCart(_cart);

        const _loginForm = document.querySelector("#login-form")! as HTMLFormElement;
        this.$loginForm = new LoginForm(_loginForm);

        // 네비게이션바 
        const _navBar = document.querySelector(".header nav.navbar")! as HTMLElement;
        this.$naviGation = new NavigationBar(_navBar);
    }
};

// 네비게이션바 (메뉴바)
class NavigationBar {
    private $btn: HTMLDivElement;
    constructor(private _navBar: HTMLElement) {
        this.$btn = document.querySelector("#menu-btn")! as HTMLDivElement;
        this.$btn.addEventListener("click", this.OnMenuClick);
    }

    private OnMenuClick = () => {
        this._navBar.classList.toggle("active");
        this.$btn.classList.toggle("active");
    };

    onscroll = () => {
        this._navBar.classList.remove("active");
        this.$btn.classList.remove("active");
    }
}

class SearchForm {
    private $btn: HTMLDivElement;
    constructor(private _form: HTMLFormElement) {
        this.$btn = document.querySelector("#search-btn")! as HTMLDivElement;

        this.$btn.addEventListener("click", this.onSearchClick);

        onscroll = () => {
            this._form.classList.remove("active");
            this.$btn.classList.remove("active");
        }
    }

    private onSearchClick = () => {
        this._form.classList.toggle("active");
        this.$btn.classList.toggle("active");
    }
};

class ShoppingCart {
    private $btn: HTMLDivElement;
    constructor(private _cart: HTMLDivElement) {
        this.$btn = document.querySelector("#cart-btn")! as HTMLDivElement;
        this.$btn.addEventListener("click", this.onShoppingCartClick);
    }

    private onShoppingCartClick = () => {
        this._cart.classList.toggle("active");
        this.$btn.classList.toggle("active");
    }

    onscroll = () => {
        this._cart.classList.remove("active");
        this.$btn.classList.remove("active");
    }
}

// 로그인폼 
class LoginForm {
    private $btn: HTMLDivElement;

    constructor(private _form: HTMLFormElement) {
        this.$btn = document.querySelector("#login-btn")! as HTMLDivElement;
        this.$btn.addEventListener("click", this.onLoginClick);
        console.log(this.$btn, this._form);
    }
    private onLoginClick = () => {
        this._form.classList.toggle("active");
        this.$btn.classList.toggle("active");
        console.log("login click");
    }

    onscroll = () => {
        this._form.classList.remove("active");
        this.$btn.classList.remove("active");
    }

};




new Grocery();