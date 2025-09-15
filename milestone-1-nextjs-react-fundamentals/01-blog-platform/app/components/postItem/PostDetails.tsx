"use client";
import Hastags from "./Hastags";
import { useState } from "react";

interface PostDetailsProps {
  title?: string;
  tldr?: string;
  publishDate?: string;
  readTime?: string;
  tags?: string[];
}

export default function PostDetails({
  title,
  tldr,
  publishDate,
  readTime,
  tags,
}: PostDetailsProps) {
  const [showTldr, setShowTldr] = useState(false);

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-3xl truncate">
          {title || "Post Title goes here."}
        </h2>
        <button
          className="rounded-sm hover:bg-neutral-800 transition cursor-pointer px-2 py-0.5  text-[10px] border border-white"
          onClick={() => setShowTldr(!showTldr)}
        >
          TLDR
        </button>
      </div>
      <div className="flex justify-between items-center py-2 overflow-hidden">
        <div className="flex gap-2 text-white items-center">
          <span className="text-[12px] whitespace-nowrap">{publishDate}</span>
          <span className="">~</span>
          <span className="text-[12px] whitespace-nowrap ">{readTime}</span>
        </div>
        <Hastags tags={tags || ["Productivity", "AI", "System"]} />
      </div>
      {showTldr && (
        <div>
          {tldr ||
            "This is a short summary of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </div>
      )}
    </div>
  );
}
