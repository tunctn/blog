import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { siteConfig } from "@/lib/config";
import { ThemeToggle } from "../../components/theme-toggle";
import { Button } from "../../components/ui/button";

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
    <Tooltip>
      <TooltipTrigger>
        <h1 className="font-bold text-lg">Tunç Türkmen</h1>
      </TooltipTrigger>
      <TooltipContent align="start">
        <p>Pronounced: Toonch Turk-men </p>
      </TooltipContent>
    </Tooltip>
  );
};
