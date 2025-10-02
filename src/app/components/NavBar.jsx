import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <h1>NavBar</h1>
      <Link href={"/"}>Home</Link>
      <Link href={"/posts"}>Posts</Link>
      <Link href={"/add-post"}>Add Post</Link>
    </>
  );
}
