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
        className="w-[30%] pt-[1vh] pb-[1vh] pl-[1vw] pr-[1vw] mb-[2vh]"
        onClick={() => {
          redirect(`/posts/${postID}?commenting=${newCommenting}`);
        }}
      >
        Hide/Show Add Comment
      </button>
    </>
  );
}
