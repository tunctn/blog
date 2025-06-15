import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DB_NAME: z.string(),
    DB_USER: z.string(),
    DB_PASS: z.string(),
    DB_HOST: z.string(),
    DB_PORT: z.coerce.number(),
    DB_SSL: z.enum(["true", "false"]),
  },

  clientPrefix: "NEXT_PUBLIC_",
  client: {
    NEXT_PUBLIC_APP_URL: z.string(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
