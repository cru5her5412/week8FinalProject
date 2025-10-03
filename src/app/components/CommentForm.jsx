import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/utils/dbCon";
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
    <div className="flex flex-col">
      <form className="flex flex-col items-center" action={handleAddComment}>
        <label className="" htmlFor="commentUsername">
          Name(optional)
        </label>
        <input className="" name="commentUsername" />
        <label className="" htmlFor="commentContent">
          Comment
        </label>
        <input className="" name="commentContent" required />
        <button className="w-[30%]" type="submit">
          Post Comment
        </button>
      </form>
    </div>
  );
}
