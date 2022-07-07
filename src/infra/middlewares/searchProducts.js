import db from "../../databases/mongo.js";

async function searchProducts(req, res, next) {
	const { searchItem } = req.body;

	// const teste = db
	// 	.collection("products")
	// 	.createIndex({ name: "text", category: "text" });
	// console.log(teste);

	console.log(searchItem);
	try {
		const products = await db
			.collection("products")
			.find({ name: new RegExp(searchItem, "i") })
			.toArray();

		console.log(products, "a");
		if (!products) {
			return res.sendStatus(404);
		}

		res.locals.products = products;
		next();
	} catch (error) {
		res.sendStatus(500);
	}
}

export default searchProducts;
