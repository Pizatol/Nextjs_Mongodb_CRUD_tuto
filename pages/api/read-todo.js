import { connectToDatabase } from "../../libs/mongodb";

export default async function handler(req, res) {
    const { db } = await connectToDatabase();
    // Send all the todos
    const todos = await db.collection("todos").find({}).toArray();
    res.status(200).json(todos);
}
