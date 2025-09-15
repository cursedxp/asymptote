import {
  ArrowBigUp,
  ArrowBigDown,
  MessageSquareText,
  Bookmark,
  Link as LinkIcon,
} from "lucide-react";

import Link from "next/link";

interface ControlsProps {
  likes?: number;
  comments?: number;
  shares?: number;
  url?: string;
}

export default function Controls({ likes, comments, url }: ControlsProps) {
  return (
    <div className="flex gap-2">
      <button className="flex items-center gap-2 p-2 rounded-md hover:bg-neutral-800 transition cursor-pointer">
        <ArrowBigUp size={18} />
        <span className="text-[14px]">{likes}</span>
      </button>
      <button className="p-2 rounded-md hover:bg-neutral-800 transition cursor-pointer">
        <ArrowBigDown size={18} />
      </button>
      <button className="flex items-center gap-2 p-2 rounded-md hover:bg-neutral-800 transition cursor-pointer">
        <MessageSquareText size={18} />
        <span className="text-[14px]">{comments}</span>
      </button>
      <button className="p-2 rounded-md hover:bg-neutral-800 transition cursor-pointer">
        <Bookmark size={18} />
      </button>
      <Link
        className="p-2 rounded-md hover:bg-neutral-800 transition cursor-pointer"
        href={url || "#"}
      >
        <LinkIcon size={18} />
      </Link>
    </div>
  );
}
