"use client";

import { redirect } from "next/navigation";

export default function PostFiltering() {
  function handleFiltering(e) {
    if (e.target.value === "all") {
      redirect("/posts");
    }
    if (e.target.value === "js") {
      redirect("/posts?filter=JS");
    }
    if (e.target.value === "html") {
      redirect("/posts?filter=HTML");
    }
    if (e.target.value === "react") {
      redirect("/posts?filter=React");
    }
  }
  return (
    <div className="filterContainer">
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
    </div>
  );
}
