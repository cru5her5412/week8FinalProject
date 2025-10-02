import CommentForm from "@/app/components/CommentForm";
import { db } from "@/utils/dbCon";
import Image from "next/image";

export default async function SpecificPostPage({ params }) {
  const postID = (await params).postID;
  const dbResponsePosts = await db.query(
    `SELECT * FROM posts where id=${postID}`
  );
  const post = dbResponsePosts.rows[0];
  const dbResponseComments = await db.query(
    `SELECT comment_username,comment_content FROM comments where post_id=${postID}`
  );
  const comments = dbResponseComments.rows;
  return (
    <>
      <h1>{post.post_title}</h1>
      <h2>{post.post_category}</h2>
      {post.post_img_url != "" &&
      post.post_img_url != null &&
      post.post_img_url != undefined ? (
        <Image
          src={post.post_img_url}
          alt={`image relating to ${post.post_title}`}
          width={500}
          height={250}
        />
      ) : null}
      <p>{post.post_content}</p>
      <CommentForm postID={postID}></CommentForm>
      {comments.map((comment) => (
        <div key={`commentNo${comment.id}`}>
          <h2>{comment.comment_username}</h2>
          <p>{comment.comment_content}</p>
        </div>
      ))}
    </>
  );
}
