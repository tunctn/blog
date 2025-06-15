import { getAllPostParams } from "@/lib/blog";
import { siteConfig } from "@/lib/config";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPostParams();
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteConfig.url}/opengraph-image`],
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${siteConfig.url}/opengraph-image`],
    },
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.year}/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "weekly" as const,
      priority: 0.6,
      images: [`${siteConfig.url}/blog/${post.year}/${post.slug}/opengraph-image`],
    })),
  ];
}
