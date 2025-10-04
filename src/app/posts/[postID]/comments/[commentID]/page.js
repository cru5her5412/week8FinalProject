import { db } from "@/utils/dbCon";
import Link from "next/link";
import specificCommentStyles from "./specificCommentPage.module.css";
export default async function SpecificCommentPage({ params }) {
  const postID = (await params).postID;
  const commentID = (await params).commentID;
  const response = await db.query(
    `SELECT * FROM comments WHERE post_id=${postID} AND id=${commentID}`
  );
  let comment = response.rows[0];
  return (
    <section className={specificCommentStyles.commentSection}>
      <h1 className={specificCommentStyles.commentTitle}>
        {comment.comment_username}
      </h1>
      <p className={specificCommentStyles.commentContent}>
        {comment.comment_content}
      </p>
      <Link
        className={specificCommentStyles.commentEdit}
        href={`/posts/${postID}/comments/${commentID}/edit`}
      >
        Edit
      </Link>
    </section>
  );
}
