import {
  ArrowBigUp,
  ArrowBigDown,
  MessageSquareText,
  Bookmark,
  Link,
} from "lucide-react";
export default function Controls() {
  return (
    <div className="flex gap-2">
      <button className="flex items-center gap-2 p-2 rounded-md hover:bg-neutral-800 transition cursor-pointer">
        <ArrowBigUp size={18} />
        <span className="text-[14px]">112</span>
      </button>
      <button className="p-2 rounded-md hover:bg-neutral-800 transition cursor-pointer">
        <ArrowBigDown size={18} />
      </button>
      <button className="flex items-center gap-2 p-2 rounded-md hover:bg-neutral-800 transition cursor-pointer">
        <MessageSquareText size={18} />
        <span className="text-[14px]">32</span>
      </button>
      <button className="p-2 rounded-md hover:bg-neutral-800 transition cursor-pointer">
        <Bookmark size={18} />
      </button>
      <button className="p-2 rounded-md hover:bg-neutral-800 transition cursor-pointer">
        <Link size={18} />
      </button>
    </div>
  );
}
