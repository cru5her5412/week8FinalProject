import { db } from "@/utils/dbCon";
import Link from "next/link";
import IndividualPost from "../components/IndividualPost";
import PostFiltering from "../components/PostFiltering";

export default async function PostsPage({ searchParams }) {
  const filter = (await searchParams).filter;
  const dbResponse = await db.query(`SELECT * FROM posts`);
  const posts = dbResponse.rows;

  return (
    <>
      <h1>Posts</h1>
      <PostFiltering />
      {posts.map((post) => {
        if (filter != undefined && filter === post.post_category) {
          return <IndividualPost key={`postNo${post.id}`} post={post} />;
        } else if (filter == undefined) {
          return <IndividualPost key={`postNo${post.id}`} post={post} />;
        }
      })}
    </>
  );
}
