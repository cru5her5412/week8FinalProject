"use client";

import { redirect, useSearchParams } from "next/navigation";

export default function CommentFormToggle({ postID }) {
  const searchParams = useSearchParams();
  const commenting = searchParams.get("commenting");
  let newCommenting;
  if (commenting == "yes") {
    newCommenting = "no";
  } else if (commenting == "no") {
    newCommenting = "yes";
  } else {
    newCommenting = "yes";
  }
  return (
    <>
      <button
        onClick={() => {
          redirect(`/posts/${postID}?commenting=${newCommenting}`);
        }}
      >
        Comment
      </button>
    </>
  );
}
