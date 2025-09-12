import Hastags from "./Hastags";

interface PostDetailsProps {
  title?: string;
}

export default function PostDetails({
  title = "Post title goes here",
}: PostDetailsProps) {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-3xl truncate">
          {title ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </h2>
      </div>
      <div className="flex justify-between items-center py-2 overflow-hidden">
        <div className="flex gap-2 text-white items-center">
          <span className="text-[12px] whitespace-nowrap">10 Sep 2025 </span>
          <span className="">~</span>
          <span className="text-[12px] whitespace-nowrap ">6 min. read</span>
          <button className="rounded-sm hover:bg-neutral-800 transition cursor-pointer px-2 py-0.5  text-[10px] border border-white">
            TLDR
          </button>
        </div>
        <Hastags tags={["Productivity", "AI", "System"]} />
      </div>
    </div>
  );
}
