//Header -> Navigation
//Main -> Footer
import PostItem from "./components/postItem/PostItem";
import { mockBlogPosts } from "../data/mockData";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <div className="w-3xl m-auto h-screen pt-16">
      <Header />
      <main>
        {mockBlogPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
}
