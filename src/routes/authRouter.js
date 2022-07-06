import { Router } from "express";
import { signIn } from "../controllers/authController.js";
import signinValidator from "../infra/validators/signinValidator.js";
import loginToken from "../infra/middlewares/loginToken.js";

const authRouter = Router();

authRouter.post("/login", signinValidator, loginToken, signIn);

export default authRouter;
