import { Request, Response, Router } from "express";

const router = Router();

type MenuIcon = {
    id: string;
    class: string;
};

type CartItem = {
    title: string;
    qty: number;
    price: string;
    src: string;
};

const cartItems: CartItem[] = [];
cartItems.push({ title: "hamberger", qty: 1, price: "$40.00", src: "../assets/Food/menu-1.png" });
cartItems.push({ title: "pizza", qty: 1, price: "$40.00", src: "../assets/Food/menu-2.png" });
cartItems.push({ title: "sandwitch", qty: 1, price: "$40.00", src: "../assets/Food/menu-3.png" });
cartItems.push({ title: "hamberger", qty: 1, price: "$40.00", src: "../assets/Food/menu-4.png" });
cartItems.push({ title: "potetochip", qty: 1, price: "$40.00", src: "../assets/Food/menu-5.png" });
cartItems.push({ title: "pizza 2", qty: 1, price: "$40.00", src: "../assets/Food/menu-6.png" });


const menus = ["home", "about", "popular", "menu", "order", "blogs"];
const icons: MenuIcon[] = [
    { id: "menu-btn", class: "fas fa-bars" },
    { id: "search-btn", class: "fas fa-search" },
    { id: "cart-btn", class: "fas fa-shopping-cart" },
    { id: "login-btn", class: "fas fa-user" }

];



router.get("/", async (req: Request, res: Response) => {
    res.render("Food/index",
        {
            menus: menus,
            icons: icons,
            carts: cartItems,
        });
});


export default router;