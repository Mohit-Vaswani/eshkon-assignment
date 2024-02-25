import Link from "next/link";
import { draftMode } from "next/headers";

import MoreStories from "../../more-stories";
import Avatar from "../../avatar";
import Date from "../../date";
import CoverImage from "../../cover-image";

import { Markdown } from "@/lib/markdown";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);

  return (
    <div className="container mx-auto px-5 max_width">
      <article>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {post.title}
        </h1>
        <div className="hidden md:block md:mb-12">
          {post.author && (
            <Avatar name={post.author.name} picture={post.author.picture} />
          )}
        </div>
        {/* <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={post.title} url={post.coverImage.url} />
        </div> */}
        <div className="max-w-2xl">
          <div className="block md:hidden mb-6">
            {post.author && (
              <Avatar name={post.author.name} picture={post.author.picture} />
            )}
          </div>
          <div className="mb-6 text-lg">
            <Date dateString={post.date} />
          </div>
        </div>

        <div className="max-w-2xl">
          <div className="prose text-gray-600 dark:text-gray-300">
            <Markdown content={post.content} />
          </div>
        </div>
      </article>
      <hr className="border-accent-2 mt-28 mb-24" />
      <MoreStories morePosts={morePosts} />
    </div>
  );
}
