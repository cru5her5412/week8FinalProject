"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function DeleteButton({ postID, commentID }) {
  function handleDelete() {
    redirect(`/posts/${postID}/comments/${commentID}/delete-comment`);
  }
  return (
    <>
      <button
        className="flex align-middle pl-[1vw] pr-[1vw] pt-[1vh] pb-[1vh] mt-[2vh]"
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
}
