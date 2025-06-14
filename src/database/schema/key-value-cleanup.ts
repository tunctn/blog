import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { index, pgTable, timestamp } from "drizzle-orm/pg-core";

export const kvCleanup = pgTable(
  "kv_cleanup",
  {
    cleaned_at: timestamp("cleaned_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("cleaned_at_index").on(t.cleaned_at)],
);

export type KVCleanup = InferSelectModel<typeof kvCleanup>;
export type InsertKVCleanup = InferInsertModel<typeof kvCleanup>;
