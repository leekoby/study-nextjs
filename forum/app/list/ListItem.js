'use client';
import Link from "next/link";
import { useEffect } from "react";

export default function ListItem({ result }) {
  console.log(result);
  return (
    <div>
      {
        result.map((a, i) =>
          <div className="list-item">
            <Link href={'/detail/' + result[i]._id}>
              <h4>{result[i].title}</h4>
            </Link>
            <Link href={'/edit/' + result[i]._id}>edit</Link>
            {/* <DetailLink /> */}
            <span onClick={() => {
              fetch('/api/post/delete', { method: 'DELETE', body: result[i]._id });
            }}>🗑️</span>
            <p>1월 1일</p>
          </div>
        )
      }
    </div >
  );
}