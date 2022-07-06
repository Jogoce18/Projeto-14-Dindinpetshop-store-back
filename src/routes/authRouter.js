import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import signinValidator from "../infra/validators/signinValidator.js";
import signupValidator from "../infra/validators/validateSignUp.js";
import loginToken from "../infra/middlewares/loginToken.js";
import addNewUser from "../infra/middlewares/NewUser.js";

const authRouter = Router();

authRouter.post("/login", signinValidator, loginToken, signIn);
authRouter.post("/signup", signupValidator, addNewUser, signUp);

export default authRouter;
