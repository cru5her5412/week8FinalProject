"use client";

import { redirect, useSearchParams } from "next/navigation";

export default function PostSorting() {
  const searchParams = useSearchParams();
  let sort = searchParams.get("sort");
  let filter = searchParams.get("filter");

  function handleSorting(e) {
    if (e.target.value === "") {
      if (filter) {
        redirect(`/posts?filter=${filter}`);
      } else {
        redirect(`/posts`);
      }
    }
    if (e.target.value === "asc") {
      if (filter) {
        redirect(`/posts?filter=${filter}&sort=asc`);
      } else {
        redirect(`/posts?sort=asc`);
      }
    }
    if (e.target.value === "desc") {
      if (filter) {
        redirect(`/posts?filter=${filter}&sort=desc`);
      } else {
        redirect(`/posts?sort=desc`);
      }
    }
  }
  return (
    <>
      <select
        className="sort"
        onChange={(e) => handleSorting(e)}
        name="postSort"
      >
        <option value={""}>Select a category</option>
        <option value={"asc"}>Alphabetical-Ascending</option>
        <option value={"desc"}>Alphabetical-Descending</option>
      </select>
    </>
  );
}
