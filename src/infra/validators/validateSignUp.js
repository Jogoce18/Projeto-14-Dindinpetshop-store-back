import signUpSchema from "../schemas/schemaSignUp.js";

async function signupValidator(req, res, next) {
	const newUser = req.body;
	const { error } = signUpSchema.validate(newUser);

	if (error) return res.status(422).send("Todos os campos são obrigatórios!");

	res.locals.newUser = newUser;

	next();
}

export default signupValidator;
