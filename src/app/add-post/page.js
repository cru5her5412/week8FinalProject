import { db } from "@/utils/dbCon";

export default async function AddPostPage() {
  async function handleAddPost(formData) {
    "use server";
    const formValues = {
      postTitle: formData.get("postTitle"),
      postContent: formData.get("postContent"),
      postImageUrl: formData.get("postImageUrl"),
      postCategory: formData.get("postCategory"),
    };
    const response = db.query(
      `INSERT INTO posts (post_title,post_content,post_img_url,post_category) VALUES ($1,$2,$3,$4)`,
      [
        formValues.postTitle,
        formValues.postContent,
        formValues.postImageUrl,
        formValues.postCategory,
      ]
    );
  }
  return (
    <>
      <h1>Add post</h1>
      <form action={handleAddPost}>
        <label htmlFor="postTitle">Post Title</label>
        <input name="postTitle" required />
        <label htmlFor="postContent">Post Content</label>
        <input name="postContent" required />
        <label htmlFor="postImgUrl">
          Post Image Url(currently only accepts unsplash and wikipedia image
          urls)
        </label>
        <input name="postImgUrl" />
        <label htmlFor="postCategory">Post Category</label>
        <select name="postCategory" required>
          <option value={""}>Choose a category</option>
          <option value={"JS"}>JavaScript</option>
          <option value={"HTML"}>HTML</option>
          <option value={"React"}>React</option>
        </select>
        <button type="submit">Add Post</button>
      </form>
    </>
  );
}
