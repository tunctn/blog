import type { Metadata } from "next";
import "./globals.css";
import { kv } from "@/lib/key-value-store";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Tunç Türkmen",
  description: "Software Engineer and Designer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Just run this on app load. Ugly, but it works for my little personal site.
  await kv.cleanupExpired();

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
