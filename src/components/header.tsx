import { config } from "@/lib/config";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="container mx-auto mt-8 flex max-w-2xl items-start justify-between px-4">
      <div>
        <div>
          <h1 className="font-bold">Tunç Türkmen</h1>
          <h3 className="text-muted-foreground">Designer and Developer</h3>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Button asChild variant="link">
            <a href={config.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </Button>
          <span className="select-none text-muted-foreground/20">/</span>
          <Button asChild variant="link">
            <a href={config.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </div>

      <nav className="flex items-center gap-4">
        <Button asChild variant="link">
          <Link href="/blog">Blog</Link>
        </Button>
        <ThemeToggle />
      </nav>
    </header>
  );
};
