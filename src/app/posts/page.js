import { db } from "@/utils/dbCon";
import Link from "next/link";
import IndividualPost from "../components/IndividualPost";
import PostFiltering from "../components/PostFiltering";
import PostSorting from "../components/PostSorting";
import postsStyles from "./posts.module.css";
export default async function PostsPage({ searchParams }) {
  const filter = (await searchParams).filter;
  const sort = (await searchParams).sort;
  const dbResponse = await db.query(`SELECT * FROM posts`);
  let posts = dbResponse.rows;
  if (posts) {
    if (sort == "asc") {
      posts.sort((a, b) => {
        return a.post_title.localeCompare(b.post_title);
      });
      //posts = posts.reverse();
    } else if (sort == "desc") {
      posts.sort((a, b) => {
        return b.post_title.localeCompare(a.post_title);
      });
    }
  }
  return (
    <>
      <h1 className={postsStyles.h1}>
        <u>Posts</u>
      </h1>
      <section className={postsStyles.postFilters}>
        <PostFiltering />
        <PostSorting />
      </section>
      <section className={postsStyles.posts}>
        {posts.map((post) => {
          if (filter != undefined && filter === post.post_category) {
            return (
              <IndividualPost
                key={`postNo${post.id}`}
                post={post}
                reverse={false}
              />
            );
          } else if (filter == undefined) {
            return (
              <IndividualPost
                key={`postNo${post.id}`}
                post={post}
                reverse={false}
              />
            );
          }
        })}
      </section>
    </>
  );
}
