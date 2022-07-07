import db from "../../databases/mongo.js";

async function searchProducts(req, res, next) {
	const { searchItem } = req.body;

	try {
		const products = await db
			.collection("products")
			.find({ name: new RegExp(searchItem, "i") })
			.toArray();

		if (products.length === 0) {
			return res.sendStatus(404);
		}

		res.locals.products = products;
		next();
	} catch (error) {
		res.sendStatus(500);
	}
}

export default searchProducts;
