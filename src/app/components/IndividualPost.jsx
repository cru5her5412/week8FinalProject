import Link from "next/link";
export default function IndividualPost({ post }) {
  return (
    <div>
      <Link
        className={"w-[100%] flex justify-center mt-[2vh]"}
        href={`/posts/${post.id}`}
      >
        <h2 className={`${post.post_category}Category text-[2rem]`}>
          {post.post_title}
        </h2>
      </Link>
    </div>
  );
}
