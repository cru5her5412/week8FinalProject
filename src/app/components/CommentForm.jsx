import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function CommentForm(props) {
  const postID = props.postID;
  async function handleAddComment(formData) {
    "use server";
    const formValues = {
      commentUsername: formData.get("commentUsername") || "anonymous",
      commentContent: formData.get("commentContent"),
    };
    const response = db.query(
      `INSERT INTO comments (post_id,comment_username,comment_content) VALUES ($1,$2,3)`,
      [postID, formValues.commentUsername, formValues.commentContent]
    );
    revalidatePath(`/posts/${postID}`);
    redirect(`/posts/${postID}`);
  }

  return (
    <>
      <form action={handleAddComment}>
        <label htmlFor="commentUsername">Name(optional)</label>
        <input name="commentUsername" />
        <label htmlFor="commentContent">Comment</label>
        <input name="commentContent" required />
        <button type="submit">Post Comment</button>
      </form>
    </>
  );
}
