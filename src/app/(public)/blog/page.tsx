import { Paragraph } from "@/components/typography/paragraph";
import { type Post, getAllPosts, getYearFromDate, isNewPost } from "@/lib/blog";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col gap-8">
      <Paragraph>Thoughts on web development, React experiments, and building things.</Paragraph>

      <div className="flex flex-col gap-4 divide-y">
        {posts.map((post) => (
          <BlogPostItem key={post.meta.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

const BlogPostItem = ({ post }: { post: Post }) => {
  const year = getYearFromDate(post.meta.date);
  const isNew = isNewPost(post.meta.date);

  return (
    <Link href={`/blog/${year}/${post.meta.slug}`}>
      <div className="group sm:-ml-4 relative mb-3 flex h-max flex-col items-start rounded-md py-3 transition-colors duration-200 sm:w-[calc(100%+16px)] md:px-4 md:hover:bg-muted">
        <div className="flex w-full items-center justify-between">
          <div className={cn("flex items-center gap-1", isNew && "mb-1")}>
            {isNew && <span className="rounded-full bg-foreground px-2 py-0.5 font-semibold text-background text-xs">New</span>}
            <span className="font-medium text-base">{post.meta.title}</span>
          </div>
          <span className="text-muted-foreground text-xs">{post.meta.views} views</span>
        </div>
        <span className="mb-2 text-muted-foreground text-sm">{post.meta.description}</span>
        <div className="flex items-center gap-3 text-muted-foreground text-xs">
          <time dateTime={post.meta.date}>
            {new Date(post.meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.meta.tags && post.meta.tags.length > 0 && (
            <div className="flex gap-1">
              {post.meta.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-muted px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
