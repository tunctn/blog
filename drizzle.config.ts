import { defineConfig } from "drizzle-kit";
import { env } from "./src/lib/env";

export default defineConfig({
  dbCredentials: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    ssl: env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
  },
  schema: "./src/database/schema/index.ts",
  out: "./drizzle",
  dialect: "postgresql",
});
