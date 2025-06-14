import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Tunç Türkmen",
  description: "Software Engineer and Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script defer src="https://analytics.wust.co/script.js" data-website-id="a1689b1b-de83-4539-9294-73121dc2b90f" />
      </head>
      <body className={cn("bg-background text-foreground antialiased")}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
