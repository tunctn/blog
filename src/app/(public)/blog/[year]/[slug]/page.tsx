import { Section } from "@/app/(public)/section";
import { getAllPostParams, getPostByYearAndSlug } from "@/lib/blog";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ year: string; slug: string }>;
};

export async function generateStaticParams() {
  return await getAllPostParams();
}

export async function generateMetadata({ params }: Props) {
  const { year, slug } = await params;
  const post = await getPostByYearAndSlug(year, slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default async function BlogPost({ params }: Props) {
  const { year, slug } = await params;
  const post = await getPostByYearAndSlug(year, slug);

  if (!post) {
    notFound();
  }

  const { Component } = post;

  return (
    <Section className="mt-8">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <header className="not-prose">
          <h1 className="mb-1 font-bold text-3xl">{post.meta.title}</h1>
          <div className="mb-4 flex items-center gap-4 text-muted-foreground text-sm">
            <time dateTime={post.meta.date}>
              {new Date(post.meta.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.meta.tags && post.meta.tags.length > 0 && (
              <div className="flex gap-2">
                {post.meta.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-muted px-2 py-1 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <Component />
      </article>
    </Section>
  );
}
