import joi from "joi";

const signUpSchema = joi.object({
	/*Validation with joi*/
	name: joi.string().required(),
	email: joi.string().email().required(),
	password: joi.string().required(),
	confirmPassword: joi.ref("password"),
});

export default signUpSchema;
