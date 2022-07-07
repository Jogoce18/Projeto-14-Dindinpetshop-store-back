import { Router } from "express";
import authRouter from "./authRouter.js";
import addProductsRouter from "./addProductsRouter.js";

const router = Router();

router.use(authRouter);
router.use(addProductsRouter);

export default router;
