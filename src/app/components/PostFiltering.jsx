"use client";

import { redirect, usePathname, useSearchParams } from "next/navigation";
export default function PostFiltering() {
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort");
  const pathname = usePathname();
  function handleFiltering(e) {
    if (e.target.value === "all") {
      if (sort) {
        redirect(`/posts?sort=${sort}`);
      } else {
        redirect(`/posts`);
      }
    }
    if (e.target.value === "js") {
      if (sort) {
        redirect(`/posts?sort=${sort}&filter=JS`);
      } else {
        redirect(`/posts?filter=JS`);
      }
    }
    if (e.target.value === "html") {
      if (sort) {
        redirect(`/posts?sort=${sort}&filter=HTML`);
      } else {
        redirect(`/posts?filter=HTML`);
      }
    }
    if (e.target.value === "react") {
      if (sort) {
        redirect(`/posts?sort=${sort}&filter=React`);
      } else {
        redirect(`/posts?filter=React`);
      }
    }
  }
  return (
    <>
      <select
        className="filter"
        onChange={(e) => handleFiltering(e)}
        name="postFilter"
      >
        <option value={""}>Select a category</option>
        <option value={"all"}>All</option>
        <option value={"js"}>JS</option>
        <option value={"html"}>HTML</option>
        <option value={"react"}>React</option>
      </select>
    </>
  );
}
