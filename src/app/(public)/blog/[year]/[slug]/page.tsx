import { Section } from "@/app/(public)/section";
import { InteractiveDemo } from "@/components/interactive-demo";
import { getAllPostParams, getPostByYearAndSlug } from "@/lib/blog";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ year: string; slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostParams();
}

export async function generateMetadata({ params }: Props) {
  const { year, slug } = await params;
  const post = getPostByYearAndSlug(year, slug);

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

const components = {
  InteractiveDemo,
};

export default async function BlogPost({ params }: Props) {
  const { year, slug } = await params;
  const post = getPostByYearAndSlug(year, slug);

  if (!post) {
    notFound();
  }

  return (
    <Section>
      <div className="max-w-4xl">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to blog
        </Link>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <header className="not-prose mb-8">
            <h1 className="mb-4 font-bold text-3xl">{post.meta.title}</h1>
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
            <p className="text-lg text-muted-foreground">{post.meta.description}</p>
          </header>

          <MDXRemote source={post.content} components={components} />
        </article>
      </div>
    </Section>
  );
}
