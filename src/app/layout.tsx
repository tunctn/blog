import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { siteConfig } from "@/lib/config";
import { kv } from "@/lib/key-value-store";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Tunç Türkmen",
  description:
    "Tunç Türkmen is a software engineer, designer, and indie developer. He is the founder of Wust, a company that builds products for the web and people.",
  openGraph: {
    title: "Tunç Türkmen's blog",
    description:
      "Tunç Türkmen is a software engineer, designer, and indie developer. He is the founder of Wust, a company that builds products for the web and people.",
    url: siteConfig.url,
    siteName: "Tunç Türkmen's blog",
    images: ["/opengraph-image"],
  },

  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
  },
  metadataBase: new URL(siteConfig.url),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Just run this on app load. Ugly, but it works for my little personal site.
  if (!process.env.CI) {
    await kv.cleanupExpired();
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <script defer src="https://analytics.wust.co/script.js" data-website-id="a1689b1b-de83-4539-9294-73121dc2b90f" />
      </head>
      <body className={cn("bg-background text-foreground antialiased")}>
        <Providers>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
