import { env } from "@/lib/env";
import type { ClientConfig } from "pg";

export const clientConfig: ClientConfig = {
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  ssl: env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
};
