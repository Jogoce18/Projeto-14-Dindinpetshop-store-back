import { Router } from "express";

import searchProducts from "../infra/middlewares/searchProducts.js";
import { searchItem } from "../controllers/searchController.js";

const searchRouter = Router();

searchRouter.get("/search", searchProducts, searchItem);

export default searchRouter;
