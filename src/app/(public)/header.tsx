import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { Pronounciation } from "./pronounciation";

export const Header = () => {
  return (
    <header className="flex items-start justify-between">
      <div>
        <div>
          <Name />
          <h3 className="text-muted-foreground">Designer and Developer</h3>
        </div>
      </div>

      <nav className="flex items-center gap-2">
        <Button asChild variant="link">
          <a href={siteConfig.twitter} target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </Button>
        <span className="select-none text-muted-foreground/20">/</span>
        <Button asChild variant="link">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
        <ThemeToggle />
      </nav>
    </header>
  );
};

const Name = () => {
  return (
    <div className="group flex items-center gap-2">
      <Link href="/">
        <h1 className="font-bold text-lg">Tunç Türkmen</h1>
      </Link>
      <Pronounciation />
    </div>
  );
};
