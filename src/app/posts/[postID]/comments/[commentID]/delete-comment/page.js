import { db } from "@/utils/dbCon";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteSpecificCommentPage({ params }) {
  const slug = await params;
  const postID = slug.postID;
  const commentID = slug.commentID;
  const response = await db.query(
    `DELETE FROM comments WHERE post_id=${postID} AND id=${commentID}`
  );
  revalidatePath(`/posts/${postID}`);
  redirect(`/posts/${postID}`);
  return <></>;
}
