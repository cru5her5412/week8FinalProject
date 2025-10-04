import { db } from "@/utils/dbCon";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import editPageStyles from "./editPostPage.module.css";
export default async function EditSpecificPostPage({ params }) {
  const postID = (await params).postID;
  const response = await db.query(`SELECT * FROM posts WHERE id=${postID}`);
  let currentPost = response.rows[0];
  async function handleEditPost(formData) {
    "use server";
    const formValues = {
      postTitle: formData.get("postTitle"),
      postContent: formData.get("postContent"),
      postImageUrl: formData.get("postImageUrl"),
      postCategory: formData.get("postCategory"),
    };
    const response = db.query(
      `UPDATE posts SET (post_title,post_content,post_img_url,post_category)=($1,$2,$3,$4) where id=${postID}`,
      [
        formValues.postTitle,
        formValues.postContent,
        formValues.postImageUrl,
        formValues.postCategory,
      ]
    );
    revalidatePath("/posts");
    redirect("/posts");
  }
  return (
    <div className={editPageStyles.page}>
      <form className={editPageStyles.postFormElement} action={handleEditPost}>
        <label className={editPageStyles.formLabel} htmlFor="postTitle">
          Post Title
        </label>
        <input
          className={editPageStyles.formInput}
          defaultValue={currentPost.post_title}
          name="postTitle"
          required
        />
        <label className={editPageStyles.formLabel} htmlFor="postContent">
          Post Content
        </label>
        <input
          className={editPageStyles.formInput}
          defaultValue={currentPost.post_content}
          name="postContent"
          required
        />
        <label className={editPageStyles.formLabel} htmlFor="postImgUrl">
          Post Image Url(currently only accepts unsplash and wikipedia image
          urls)
        </label>
        <input
          className={editPageStyles.formInput}
          defaultValue={currentPost.post_img_url}
          name="postImgUrl"
        />
        <label className={editPageStyles.formLabel} htmlFor="postCategory">
          Post Category
        </label>
        <select
          className={editPageStyles.formInput}
          defaultValue={currentPost.post_category}
          name="postCategory"
          required
        >
          <option value={""}>Choose a category</option>
          <option value={"JS"}>JavaScript</option>
          <option value={"HTML"}>HTML</option>
          <option value={"React"}>React</option>
        </select>
        <button className={editPageStyles.submitFormButton} type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
}
