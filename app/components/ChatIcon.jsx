import React from "react";
import { MessageCircleCode } from "lucide-react";
import Link from "next/link";

function ChatIcon() {
  return (
    <div className=" bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-all duration-300 ease-in-out">
      <Link href="https://wa.link/d6zot4" target="_blank">
        <MessageCircleCode/>
      </Link>
    </div>
  );
}

export default ChatIcon;
