import { timestamp, uuid } from "drizzle-orm/pg-core";

export const baseIdModel = {
  id: uuid("id").defaultRandom().primaryKey(),
};

export const baseModel = {
  ...baseIdModel,
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true }),
};
