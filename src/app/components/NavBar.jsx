import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <Link href={"/posts"}>Posts</Link>
      <Link href={"/add-post"}>Add Post</Link>
    </>
  );
}
