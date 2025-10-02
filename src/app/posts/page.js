import { db } from "@/utils/dbCon";
import Link from "next/link";

export default async function PostsPage() {
  const dbResponse = await db.query(`SELECT * FROM posts`);
  const posts = dbResponse.rows;
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h2 className={`${post.post_category}Category`}>
              {post.post_title}
            </h2>
          </Link>
        </div>
      ))}
    </>
  );
}
