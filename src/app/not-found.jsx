import Link from "next/link";
import { notFound } from "next/navigation";

export default function NotFound() {
  return (
    <div>
      <h1>
        Welcome to <span style={{ color: "green" }}>GeeksForGeeks</span>
      </h1>

      <p>Sorry , The page you are looking for can't be found</p>

      <p>Try checking your URL</p>

      <h2>
        This is a <span style={{ color: "red" }}>404 page</span>
      </h2>
    </div>
  );
}
