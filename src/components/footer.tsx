import { config } from "@/lib/config";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="container mx-auto mt-8 flex max-w-2xl items-end justify-between px-4 pb-8">
      <div>
        <div>
          <span className="font-semibold text-muted-foreground text-sm">Tunç Türkmen</span>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="link" className="text-muted-foreground">
            <a href={config.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </Button>
          <span className="select-none text-muted-foreground/20">/</span>
          <Button asChild variant="link" className="text-muted-foreground">
            <a href={config.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </div>

      <div>
        <Button asChild variant="link" className="text-muted-foreground">
          <a href={config.repoSource} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </Button>
      </div>
    </footer>
  );
};
