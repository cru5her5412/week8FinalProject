import Link from "next/link";
export default function IndividualPost({ post }) {
  return (
    <div>
      <Link href={`/posts/${post.id}`}>
        <h2 className={`${post.post_category}Category`}>{post.post_title}</h2>
      </Link>
    </div>
  );
}
