import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/utils/dbCon";
import commentFormStyles from "./CommentForm.module.css";
export default async function CommentForm(props) {
  const postID = props.postID;
  async function handleAddComment(formData) {
    "use server";
    const formValues = {
      commentUsername: formData.get("commentUsername") || "anonymous",
      commentContent: formData.get("commentContent"),
    };
    const response = db.query(
      `INSERT INTO comments (post_id,comment_username,comment_content) VALUES ($1,$2,$3)`,
      [postID, formValues.commentUsername, formValues.commentContent]
    );
    revalidatePath(`/posts/${postID}`);
    redirect(`/posts/${postID}`);
  }

  return (
    <div>
      <form
        className={commentFormStyles.commentFormElement}
        action={handleAddComment}
      >
        <label
          className={commentFormStyles.formLabel}
          htmlFor="commentUsername"
        >
          Name(optional)
        </label>
        <input
          className={commentFormStyles.formInput}
          name="commentUsername"
          id="commentUsername"
        />
        <label className={commentFormStyles.formLabel} htmlFor="commentContent">
          Comment
        </label>
        <textarea
          className={commentFormStyles.formInput}
          name="commentContent"
          id="commentContent"
          required
          rows="3"
        />
        <button className={commentFormStyles.submitFormButton} type="submit">
          Post Comment
        </button>
      </form>
    </div>
  );
}
