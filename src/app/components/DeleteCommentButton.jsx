"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function DeleteButton({ postID, commentID }) {
  function handleDelete() {
    redirect(`/posts/${postID}/comments/${commentID}/delete-comment`);
  }
  return (
    <>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
