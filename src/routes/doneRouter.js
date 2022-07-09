import { Router } from "express";
import { saveOrder } from "../infra/middlewares/saveOrder.js";
import { orderSaved } from "../controllers/OrderController.js";

const doneRouter = Router();

doneRouter.post("/done", saveOrder, orderSaved);

export default doneRouter;
