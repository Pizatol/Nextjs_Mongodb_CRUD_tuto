import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../libs/mongodb";

export default async function handler(req, res) {
    const { db } = await connectToDatabase();
    // Update Todo Data
    const { title, completed, id } = req.body;
    // Update the todo with the given id
    await db.collection("todos").updateOne(
        { _id: ObjectId(id) },
        {
            $set: {
                title,
                completed,
            },
        }
    );
    // Send a response
    res.status(200).json({
        data: await db.collection("todos").findOne({ _id: ObjectId(id) }),
        message: "Todo updated successfully",
    });
}
