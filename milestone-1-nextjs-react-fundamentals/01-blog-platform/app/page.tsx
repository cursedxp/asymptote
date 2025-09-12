//Header -> Navigation
//Main -> Footer
import PostItem from "./components/postItem/PostItem";

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
        <PostItem />
      </main>
    </div>
  );
}
