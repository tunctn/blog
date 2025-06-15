import { Section } from "@/app/(public)/section";
import { getAllPostParams, getPostByYearAndSlug } from "@/lib/blog";
import { env } from "@/lib/env";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "./header";

export const revalidate = 60;

type Props = {
  params: Promise<{ year: string; slug: string }>;
};

export async function generateStaticParams() {
  return await getAllPostParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year, slug } = await params;
  const post = await getPostByYearAndSlug(year, slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      images: [`${env.NEXT_PUBLIC_APP_URL}/blog/${year}/${slug}/opengraph-image`],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { year, slug } = await params;
  const post = await getPostByYearAndSlug(year, slug);

  if (!post) {
    notFound();
  }

  const { Component, meta } = post;

  return (
    <Section className="mt-8">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <Header post={meta} />
        <Component />
      </article>
    </Section>
  );
}
