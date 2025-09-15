//Header -> Navigation
//Main -> Footer
import PostItem from "./components/postItem/PostItem";
import { mockBlogPosts } from "../data/mockData";

export default function Home() {
  return (
    <div className="w-3xl m-auto h-screen pt-16">
      <header>
        <nav>
          <ul className="flex gap-4 m-2">
            <li>Relevant</li>
            <li>Latest</li>
            <li>Top</li>
          </ul>
        </nav>
      </header>
      <main>
        {mockBlogPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
}
