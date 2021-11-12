import { Request, Response, Router } from "express";

const router = Router();

const menus: string[] = ["home", "about", "destination", "services", "gallery", "blog"]

router.get("/", async (req: Request, res: Response) => {
    res.render("Travel/index",
        {
            menus: menus,
        });
});


export default router;