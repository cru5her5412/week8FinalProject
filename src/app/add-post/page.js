import { db } from "@/utils/dbCon";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import addPostStyles from "./addPost.module.css";
export default async function AddPostPage() {
  async function handleAddPost(formData) {
    "use server";
    const formValues = {
      postTitle: formData.get("postTitle"),
      postContent: formData.get("postContent"),
      postImageUrl: formData.get("postImgUrl"),
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
    revalidatePath("/posts");
    redirect("/posts");
  }
  return (
    <div className={addPostStyles.page}>
      <h1 className={addPostStyles.h1}>Add post</h1>
      <form className={addPostStyles.postFormElement} action={handleAddPost}>
        <label
          className={addPostStyles.formLabel}
          id={addPostStyles.postTitleLabel}
          htmlFor="postTitle"
        >
          Post Title
        </label>
        <input
          className={addPostStyles.formInput}
          id={addPostStyles.postTitleInput}
          name="postTitle"
          required
        />
        <label
          className={addPostStyles.formLabel}
          id={addPostStyles.postContentLabel}
          htmlFor="postContent"
        >
          Post Content
        </label>
        <textarea
          className={addPostStyles.formInput}
          id={addPostStyles.postContentInput}
          name="postContent"
          required
          rows="4"
        />
        <label
          className={addPostStyles.formLabel}
          id={addPostStyles.postImgUrlLabel}
          htmlFor="postImgUrl"
        >
          Post Image URL: (currently only accepts unsplash and wikipedia image
          urls)
        </label>
        <input
          className={addPostStyles.formInput}
          id={addPostStyles.postImgUrlInput}
          name="postImgUrl"
        />
        <label
          className={addPostStyles.formLabel}
          id={addPostStyles.postCategoryLabel}
          htmlFor="postCategory"
        >
          Post Category
        </label>
        <select
          className={addPostStyles.formInput}
          id={addPostStyles.categoryInput}
          name="postCategory"
          required
        >
          <option value={""}>Choose a category</option>
          <option value={"JS"}>JavaScript</option>
          <option value={"HTML"}>HTML</option>
          <option value={"React"}>React</option>
        </select>
        <button className={addPostStyles.submitFormButton} type="submit">
          Add Post
        </button>
      </form>
    </div>
  );
}
