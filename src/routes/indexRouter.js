import { Router } from "express";
import authRouter from "./authRouter.js";
import addProductsRouter from "./addProductsRouter.js";

import homeRouter from "./homeRouter.js";

import searchRouter from "./searchRouter.js";


const router = Router();

router.use(authRouter);
router.use(addProductsRouter);

router.use(homeRouter);

router.use(searchRouter);


export default router;
