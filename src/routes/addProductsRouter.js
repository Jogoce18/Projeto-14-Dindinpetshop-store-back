import { Router } from "express";

import { addProducts } from "../controllers/addProductController.js";
import newProduct from "../infra/middlewares/newProduct.js";

const addProductsRouter = Router();

addProductsRouter.post("/newproduct", newProduct, addProducts);

export default addProductsRouter;
