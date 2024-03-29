export function signIn(req, res) {
	try {
		const token = res.locals.token;
		const name = res.locals.name;

		res.status(200).send({ token, name });
	} catch (err) {
		res.sendStatus(500);
	}
}

export function signUp(req, res) {
	try {
		res.status(201).send("Usuário cadastrado com sucesso!");
	} catch (err) {
		res.sendStatus(500);
	}
}