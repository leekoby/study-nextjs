import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    if (req.body.title === '') {
      return res.status(500).json('너 왜 제목 안씀?');
    }

    try {
      const db = (await connectDB).db('forum');
      const result = await db.collection('post').insertOne(req.body);
      return res.status(200);
    } catch (error) {
      console.error(error);
    }

  }
}