import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  slug: string;
};

export type Post = {
  meta: PostMeta;
  content: string;
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

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      meta: {
        ...data,
        slug,
      } as PostMeta,
      content,
    };
  } catch (_error) {
    return null;
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));

  return posts;
}

export function getYearFromDate(date: string): string {
  return new Date(date).getFullYear().toString();
}

export function getPostsByYear(year: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => getYearFromDate(post.meta.date) === year);
}

export function getPostByYearAndSlug(year: string, slug: string): Post | null {
  const post = getPostBySlug(slug);
  if (!post) {
    return null;
  }

  const postYear = getYearFromDate(post.meta.date);
  return postYear === year ? post : null;
}

export function getPostsByYearGrouped(): PostsByYear {
  const allPosts = getAllPosts();
  const postsByYear: PostsByYear = {};

  for (const post of allPosts) {
    const year = getYearFromDate(post.meta.date);
    if (!postsByYear[year]) {
      postsByYear[year] = [];
    }
    postsByYear[year].push(post);
  }

  return postsByYear;
}

export function getAvailableYears(): string[] {
  const allPosts = getAllPosts();
  const years = new Set(allPosts.map((post) => getYearFromDate(post.meta.date)));
  return Array.from(years).sort((a, b) => Number.parseInt(b) - Number.parseInt(a)); // Most recent first
}

// Optimized function for generateStaticParams to avoid multiple getAllPosts() calls
export function getAllPostParams(): PostParams[] {
  const allPosts = getAllPosts();
  return allPosts.map((post) => ({
    year: getYearFromDate(post.meta.date),
    slug: post.meta.slug,
  }));
}
