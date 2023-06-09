import { connectDB } from "@/util/database.js";

import DetailLink from "./DetailLink";
import ListItem from "./ListItem";

export default async function List() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}