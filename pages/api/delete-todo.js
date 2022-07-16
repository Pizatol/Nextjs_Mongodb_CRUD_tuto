import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../libs/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  // Delete Todo ID
  const { id } = req.body;
  // Delete the todo with the given id
  const response = await db
    .collection("todos")
    .deleteOne({ _id: ObjectId(id) });
  // Send a response
  res.status(200).json({
    data: await db.collection("todos").findOne({ _id: ObjectId(id) }),
    message: "Todo deleted successfully",
  });
}