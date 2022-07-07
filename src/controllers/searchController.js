export function searchItem(req, res) {
	try {
		const products = res.locals.products;
		res.status(200).send(products);
	} catch (error) {
		res.sendStatus(500);
	}
}
