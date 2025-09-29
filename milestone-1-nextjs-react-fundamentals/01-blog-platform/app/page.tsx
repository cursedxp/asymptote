//Header -> Navigation
//Main -> Footer
import PostItem from "./components/postItem/PostItem";
import { mockBlogPosts } from "../data/mockData";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {mockBlogPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
}
