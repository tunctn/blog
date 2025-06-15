import { env } from "./env";

export const siteConfig = {
  twitterHandle: "@tunctn_",
  twitter: `https://x.com/tunctn_`,
  github: "https://github.com/tunctn",
  email: "t@tunc.co",
  url: env.NEXT_PUBLIC_APP_URL,

  repoSource: "https://github.com/tunctn/tunc.co",
} as const;
