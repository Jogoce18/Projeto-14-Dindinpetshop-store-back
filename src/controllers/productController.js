import db from "../databases/mongo.js";
import { ObjectId } from "mongodb";

export async function getRacao(req, res) {
	const { category } = req.headers;
	try {
		const myproducts = await db
			.collection("products")
			.find({ category: category })
			.toArray();
		res.status(200).send(myproducts);
	} catch (error) {
		res.sendStatus(500);
	}
}

export async function getProductData(req, res) {
	const { id } = req.params;
	if (!id) return res.status(422).send({ message: "Id inválido" });
	try {
		const product = await db
			.collection("products")
			.findOne({ _id: ObjectId(id) });
		res.status(200).send(product);
	} catch (error) {
		res.sendStatus(500);
	}
}
