import { connectDB } from "@/util/database";
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {

  if (req.method === 'POST') {
    let updateData = { title: req.body.title, content: req.body.content };
    const db = (await connectDB).db('forum');
    const result = await db.collection('post').updateOne(
      { _id: new ObjectId(req.body._id) },
      { $set: updateData });
    console.log(result);

    res.status(200).redirect('/');
  }
}