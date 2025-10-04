import { db } from "@/utils/dbCon";
import Link from "next/link";
import commentStyles from "./commentsForPage.module.css";
export default async function CommentsForPostPage({ params }) {
  const postID = (await params).postID;
  const response = await db.query(
    `SELECT * FROM comments WHERE post_id=${postID}`
  );
  let comments = response.rows;
  return (
    <div className={commentStyles.container}>
      <section className={commentStyles.container}>
        <h1 className={commentStyles.commentsPageTitle}>comments</h1>
        {comments.map((comment) => (
          <div key={comment.id}>
            <Link
              className={commentStyles.commentLink}
              href={`/posts/${postID}/comments/${comment.id}`}
            >
              <h2 className={commentStyles.commentTitle}>
                {comment.comment_username}
              </h2>
              <p className={commentStyles.commentContent}>
                {comment.comment_content}
              </p>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
