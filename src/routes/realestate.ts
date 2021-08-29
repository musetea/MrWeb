import { Request, Response, Router } from "express";

const router = Router();

router.get("/RealEstate", async (req: Request, res: Response) => {
   res.render("RealEstate");
});


export default router;