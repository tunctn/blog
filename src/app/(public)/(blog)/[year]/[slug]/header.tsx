"use client";

import { api } from "@/lib/api";
import type { PostMeta } from "@/lib/blog";
import { useEffect, useRef } from "react";

export const Header = ({ post }: { post: PostMeta }) => {
  return (
    <header className="not-prose">
      <h1 className="mb-1 font-bold text-3xl">{post.title}</h1>
      {post.tags && post.tags.length > 0 && (
        <div className="mb-4 flex gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-muted px-2 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mb-4 flex items-center justify-between gap-4 text-muted-foreground text-sm">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <span className="pr-1.5">
          <Views id={post.slug} defaultValue={post.views} />
        </span>
      </div>
    </header>
  );
};

function Views({ id, defaultValue }: { id: string; defaultValue: number }) {
  const views = defaultValue;
  const didLogViewRef = useRef(false);

  useEffect(() => {
    if (!didLogViewRef.current) {
      const url = `view?id=${encodeURIComponent(id)}`;
      api.post(url).catch(console.error);
      didLogViewRef.current = true;
    }
  });

  return <span>{views + 1} views</span>;
}
