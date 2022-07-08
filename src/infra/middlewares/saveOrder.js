import db from "../../databases/mongo";

export async function saveOrder(req, res, next) {
	const information = req.body;

	if (!information) return res.sendStatus(500);

	await db.collection("orders").insertOne(information);
	next();
}
