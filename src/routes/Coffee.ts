import { Request, Response, Router } from "express";

type CartItem = {
    image: string;
    title: string;
    price: string;
};
type Munu = {
    image: string;
    title: string;
    price: string;
    max_price: string;
};

type Product = {
    image: string;
    title: string;
};

type Review = {
    image: string;
    name: string;
    user: string;
};
type Blog = {
    image: string;
    title: string;
    datetime: string;
};




const router = Router();

const navigations: string[] = ["home", "about", "menu", "products", "review", "contact", "blogs"]
const images: string[] = [
    "../assets/Coffee/logo.png",
];

const cartItems: CartItem[] = [];
cartItems.push({ image: "../assets/Coffee/cart-item-1.png", title: "cart item 01", price: "$15.99/-" });
cartItems.push({ image: "../assets/Coffee/cart-item-2.png", title: "cart item 02", price: "$15.99/-" });
cartItems.push({ image: "../assets/Coffee/cart-item-3.png", title: "cart item 03", price: "$15.99/-" });
cartItems.push({ image: "../assets/Coffee/cart-item-4.png", title: "cart item 04", price: "$15.99/-" });

const menus: Munu[] = [];
menus.push({ image: "../assets/Coffee/menu-1.png", title: "tasty and healty", price: "$15.99", max_price: "  20.99" });
menus.push({ image: "../assets/Coffee/menu-2.png", title: "tasty and healty", price: "$15.99", max_price: "  20.99" });
menus.push({ image: "../assets/Coffee/menu-3.png", title: "tasty and healty", price: "$15.99", max_price: "  20.99" });
menus.push({ image: "../assets/Coffee/menu-4.png", title: "tasty and healty", price: "$15.99", max_price: "  20.99" });
menus.push({ image: "../assets/Coffee/menu-5.png", title: "tasty and healty", price: "$15.99", max_price: "  20.99" });
menus.push({ image: "../assets/Coffee/menu-6.png", title: "tasty and healty", price: "$15.99", max_price: "  20.99" });

const abouts: string[] = [];
abouts.push("../assets/Coffee/about-img.jpeg");

const products: Product[] = [];
products.push({ image: "../assets/Coffee/product-1.png", title: "fresh coffee" });
products.push({ image: "../assets/Coffee/product-2.png", title: "delicus coffee" });
products.push({ image: "../assets/Coffee/product-3.png", title: "good coffee" });

const reviews: Review[] = [];
reviews.push({ image: "../assets/Coffee/quote-img.png", name: "jhon dor", user: "../assets/Coffee/pic-1.png" });
reviews.push({ image: "../assets/Coffee/quote-img.png", name: "mishhel power", user: "../assets/Coffee/pic-2.png" });
reviews.push({ image: "../assets/Coffee/quote-img.png", name: "mir hang", user: "../assets/Coffee/pic-3.png" });


const blogs: Blog[] = [];
blogs.push({ image: "../assets/Coffee/blog-1.jpeg", title: "tasty an drefreshing coffee", datetime: "by admin / 21st may, 2021" });
blogs.push({ image: "../assets/Coffee/blog-2.jpeg", title: "tasty an drefreshing coffee", datetime: "by admin / 21st may, 2021" });
blogs.push({ image: "../assets/Coffee/blog-3.jpeg", title: "tasty an drefreshing coffee", datetime: "by admin / 21st may, 2021" });

router.get("/", async (req: Request, res: Response) => {
    res.render("Coffee/index",
        {
            navigations: navigations,
            images: images,
            cartItems: cartItems,
            abouts: abouts,
            menus: menus,
            products: products,
            reviews: reviews,
            blogs: blogs,
        });
});


export default router;