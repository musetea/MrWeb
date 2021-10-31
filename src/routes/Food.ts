import { Request, Response, Router } from "express";

const router = Router();

type MenuIcon = {
    id: string;
    class: string;
};


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
            icons: icons
        });
});


export default router;