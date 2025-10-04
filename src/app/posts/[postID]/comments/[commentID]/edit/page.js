import DeleteButton from "@/app/components/DeleteCommentButton";
import { db } from "@/utils/dbCon";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";
import editCommentStyles from "./editCommentPage.module.css";
export default async function EditSpecificCommentPage({ params }) {
  const postID = (await params).postID;
  const commentID = (await params).commentID;
  const response = await db.query(
    `SELECT * FROM comments WHERE id=${commentID}`
  );
  let currentComment = response.rows[0];
  async function handleEditComment(formData) {
    "use server";
    const formValues = {
      commentUsername: formData.get("commentUsername"),
      commentContent: formData.get("commentContent"),
    };
    const response = db.query(
      `UPDATE comments SET (comment_username,comment_content)=($1,$2) WHERE id=${commentID}`,
      [formValues.commentUsername, formValues.commentContent]
    );
    revalidatePath(`/posts/${postID}`);
    redirect(`/posts/${postID}`);
  }

  return (
    <div className={editCommentStyles.container}>
      <form
        className={editCommentStyles.commentFormElement}
        action={handleEditComment}
      >
        <label
          className={editCommentStyles.formLabel}
          htmlFor="commentUsername"
        >
          Name(optional)
        </label>
        <input
          className={editCommentStyles.formInput}
          defaultValue={currentComment.comment_username}
          name="commentUsername"
        />
        <label className={editCommentStyles.formLabel} htmlFor="commentContent">
          Comment
        </label>
        <textarea
          className={editCommentStyles.formInput}
          defaultValue={currentComment.comment_content}
          name="commentContent"
          required
          rows="3"
        />
        <button className={editCommentStyles.submitFormButton} type="submit">
          Edit Comment
        </button>
      </form>
      <DeleteButton postID={postID} commentID={commentID} />
    </div>
  );
}
