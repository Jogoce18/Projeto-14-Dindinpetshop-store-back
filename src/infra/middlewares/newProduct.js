import db from "../../databases/mongo.js";

async function newProduct(req, res, next) {
	const data = req.body;

	await db.collection("products").insertOne(data);

	next();
}

export default newProduct;
