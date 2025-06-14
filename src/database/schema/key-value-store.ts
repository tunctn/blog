import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { index, jsonb, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const kvTable = pgTable(
  "kv_store",
  {
    key: text("key").primaryKey(),
    value: jsonb("value").notNull(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    expires_at: timestamp("expires_at", { withTimezone: true }),
  },
  (t) => [index("key_index").on(t.key)],
);

export type KV = InferSelectModel<typeof kvTable>;
export type InsertKV = InferInsertModel<typeof kvTable>;
