import CommentForm from "@/app/components/CommentForm";
import { db } from "@/utils/dbCon";
import Image from "next/image";
import Link from "next/link";
import postStyles from "./post.module.css";
import CommentFormToggle from "@/app/components/CommentFormToggle";
export default async function SpecificPostPage({ params, searchParams }) {
  let showCommentForm = (await searchParams).commenting;
  const postID = (await params).postID;
  const dbResponsePosts = await db.query(
    `SELECT * FROM posts where id=${postID}`
  );
  const post = dbResponsePosts.rows[0];
  const dbResponseComments = await db.query(
    `SELECT * FROM comments where post_id=${postID}`
  );
  const comments = dbResponseComments.rows;
  return (
    <>
      <h1 className={postStyles.postTitle}>{post.post_title}</h1>
      <h2 className={postStyles.postCategory}>{post.post_category}</h2>
      {post.post_img_url != "" &&
      post.post_img_url != null &&
      post.post_img_url != undefined ? (
        <Image
          className={postStyles.postImage}
          src={post.post_img_url}
          alt={`image relating to ${post.post_title}`}
          width={500}
          height={250}
        />
      ) : null}
      <p className={postStyles.postContent}>{post.post_content}</p>
      <Link className={postStyles.portEdit} href={`/posts/${post.id}/edit`}>
        Edit
      </Link>
      <section>
        <CommentFormToggle postID={postID} />
        {showCommentForm == "yes" ? <CommentForm postID={postID} /> : null}
      </section>
      {comments.map((comment) => (
        <div key={`commentNo${comment.id}`}>
          <h2>{comment.comment_username}</h2>
          <p>{comment.comment_content}</p>
        </div>
      ))}
      <Link href={`/posts`}>Back</Link>
    </>
  );
}
