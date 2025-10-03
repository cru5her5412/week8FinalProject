import { db } from "@/utils/dbCon";
import Link from "next/link";

export default async function CommentsForPostPage({ params }) {
  const postID = (await params).postID;
  const response = await db.query(
    `SELECT * FROM comments WHERE post_id=${postID}`
  );
  let comments = response.rows;
  return (
    <>
      <h1>comments</h1>
      {comments.map((comment) => (
        <div key={comment.id}>
          <Link href={`/posts/${postID}/comments/${comment.id}`}>
            <h2>{comment.comment_username}</h2>
            <p>{comment.comment_content}</p>
          </Link>
        </div>
      ))}
      <Link href={`/posts/${postID}`}>Back</Link>
    </>
  );
}
