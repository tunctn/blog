import { count, db, eq, postViews } from "@/database";
import { getAllPosts } from "@/lib/blog";
import { getRefererOrigin } from "@/utils/get-referer-origin";
import commaNumber from "comma-number";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const getPost = async (req: NextRequest) => {
  const url = new URL(req.url);

  const id = url.searchParams.get("id") ?? null;
  if (id === null) {
    return { error: { message: 'Missing "id" query', code: "MISSING_ID", status: 400 } };
  }

  const post = await getAllPosts().then((posts) => posts.find((post) => post.meta.slug === id));
  if (post == null) {
    return { error: { message: "Unknown post", code: "UNKNOWN_POST", status: 400 } };
  }

  return post;
};

export async function GET(req: NextRequest) {
  const post = await getPost(req);
  if ("error" in post) {
    return NextResponse.json(post.error, { status: post.error.status });
  }

  const slug = post.meta.slug;
  const views = await db.select({ count: count() }).from(postViews).where(eq(postViews.post_slug, slug));
  return NextResponse.json({
    ...post,
    views: views[0].count,
    viewsFormatted: commaNumber(views[0].count),
  });
}

export async function POST(req: NextRequest) {
  const referer = req.headers.get("referer");
  const country = req.headers.get("cf-ipcountry") ?? "unknown";

  const post = await getPost(req);
  if ("error" in post) {
    return NextResponse.json(post.error, { status: post.error.status });
  }

  await db.insert(postViews).values({
    post_slug: post.meta.slug,
    country_code: country,
    referer: getRefererOrigin(referer),
  });

  return NextResponse.json({ success: true });
}
