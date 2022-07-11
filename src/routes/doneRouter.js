import { Router } from "express";
import { saveOrder } from "../infra/middlewares/saveOrder.js";
import { orderSaved } from "../controllers/OrderController.js";
import verifyToken from "../infra/validators/tokenValidator.js";

const doneRouter = Router();

doneRouter.post("/done", verifyToken, saveOrder, orderSaved);

export default doneRouter;
