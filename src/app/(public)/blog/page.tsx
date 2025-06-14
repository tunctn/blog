import { Section } from "@/app/(public)/section";
import { type Post, getAllPosts, getYearFromDate } from "@/lib/mdx";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="mb-2 font-bold text-2xl">Blog</h1>
          <p className="text-muted-foreground">Thoughts on web development, React experiments, and building things.</p>
        </div>

        {posts.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No posts yet. Come back soon!</p>
          </div>
        ) : (
          <div className="md:-ml-4 flex flex-col gap-2 md:w-[calc(100%+16px)]">
            {posts.map((post) => (
              <BlogPostItem key={post.meta.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

const BlogPostItem = ({ post }: { post: Post }) => {
  const year = getYearFromDate(post.meta.date);

  return (
    <Link href={`/blog/${year}/${post.meta.slug}`}>
      <div className="group relative flex h-max flex-col items-start rounded-md py-3 transition-colors duration-200 md:px-4 md:hover:bg-muted">
        <div className="mb-1 flex items-center gap-2">
          <span className="font-medium text-base">{post.meta.title}</span>
          <span className="absolute top-3 right-3 opacity-0 transition-opacity group-hover:opacity-100">
            <ArrowUpRight className="size-4" />
          </span>
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
