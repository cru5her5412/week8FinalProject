import { db } from "@/utils/dbCon";
import { Libertinus_Math } from "next/font/google";
import Link from "next/link";

export default async function SpecificCommentPage({ params }) {
  const postID = (await params).postID;
  const commentID = (await params).commentID;
  const response = await db.query(
    `SELECT * FROM comments WHERE post_id=${postID} AND id=${commentID}`
  );
  let comment = response.rows[0];
  return (
    <>
      <h1>{comment.comment_username}</h1>
      <p>{comment.comment_content}</p>
      <Link href={`/posts/${postID}/comments/${commentID}/edit`}>Edit</Link>
      <Link href={`/posts/${postID}/comments/`}>Back</Link>
    </>
  );
}
