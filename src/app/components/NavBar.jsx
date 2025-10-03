import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navBar">
      <Link className="navLink" href={"/"}>
        Home
      </Link>
      <Link className="navLink" href={"/posts"}>
        Posts
      </Link>
      <Link className="navLink" href={"/add-post"}>
        Add Post
      </Link>
    </nav>
  );
}
