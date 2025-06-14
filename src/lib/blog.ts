import fs from "node:fs";
import path from "node:path";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export type PostMeta = {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  slug: string;
};

export type Post = {
  meta: PostMeta;
  Component: React.ComponentType;
};

export type PostsByYear = {
  [year: string]: Post[];
};

export type PostParams = {
  year: string;
  slug: string;
};

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const { meta, default: Component } = await import(`@/content/posts/${slug}.mdx`);

    return {
      meta: {
        ...meta,
        slug,
      },
      Component,
    };
  } catch (_error) {
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs();
  const postsPromises = slugs.map(getPostBySlug);
  const posts = (await Promise.all(postsPromises))
    .filter((post): post is Post => post !== null)
    .sort((post1, post2) => new Date(post2.meta.date).getTime() - new Date(post1.meta.date).getTime());

  return posts;
}

export function getYearFromDate(date: string): string {
  return new Date(date).getFullYear().toString();
}

export function isNewPost(date: string): boolean {
  return new Date(date).getTime() > new Date().getTime() - 1000 * 60 * 60 * 24 * 30; // 30 days
}

export async function getPostByYearAndSlug(year: string, slug: string): Promise<Post | null> {
  const post = await getPostBySlug(slug);
  if (!post) {
    return null;
  }

  const postYear = getYearFromDate(post.meta.date);
  return postYear === year ? post : null;
}

// Optimized function for generateStaticParams to avoid multiple getAllPosts() calls
export async function getAllPostParams(): Promise<PostParams[]> {
  const allPosts = await getAllPosts();
  return allPosts.map((post) => ({
    year: getYearFromDate(post.meta.date),
    slug: post.meta.slug,
  }));
}
