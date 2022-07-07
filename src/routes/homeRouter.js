import { Router } from "express";
import {  getProductData, getRacao} from "../controllers/productController.js";


const homeRouter = Router();

homeRouter.get("/category", getRacao);

homeRouter.get("/produtos/:id", getProductData);


export default homeRouter;