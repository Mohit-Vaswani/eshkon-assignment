import Link from "next/link";
import { draftMode } from "next/headers";
import MoreStories from "./more-stories";

import { getAllPosts } from "@/lib/api";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const morePosts = allPosts;


  return (
      <div className="container mx-auto px-5 max_width">
        <MoreStories morePosts={morePosts} />
      </div>
  );
}
