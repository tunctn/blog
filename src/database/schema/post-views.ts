import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { index, pgTable, text } from "drizzle-orm/pg-core";
import { baseModel } from "./abstract";

export const postViews = pgTable(
  "post_views",
  {
    ...baseModel,
    post_slug: text("post_slug").notNull(),
    country_code: text("country_code").notNull(),
    referer: text("referer"),
  },
  (t) => [index("post_slug_index").on(t.post_slug), index("country_code_index").on(t.country_code)],
);

export type PostView = InferSelectModel<typeof postViews>;
export type InsertPostView = InferInsertModel<typeof postViews>;
