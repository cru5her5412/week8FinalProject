export default async function CommentForm(props) {
  const postID = props.postID;
  async function handleAddComment() {
    "use server";
    const formValues = {
      commentUsername: formData.get("commentUsername") || "anonymous",
      commentContent: formData.get("commentContent"),
    };
    const response = db.query(
      `INSERT INTO comments (post_id,comment_username,comment_content) VALUES ($1,$2,3)`,
      [postID, formValues.commentUsername, formValues.commentContent]
    );
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
