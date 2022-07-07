import db from "../databases/mongo.js";

export async function getRacao(req,res){
    const {item}=req.headers;
    try {
        const myproducts = await db.collection("products").find(item).toArray();
        res.status(200).send(myproducts);
    }catch(error){
        res.sendStatus(500);
    }
}


export async function getProductData(req,res){
    const { id } = req.params;
    if(!id) return res.status(422).send({message:"Id inválido"});
    try {
        const product = await db.collection("products").findOne({id: parseInt(id)});
        res.status(200).send(product);
    }catch(error){
        res.sendStatus(500);
    }
}