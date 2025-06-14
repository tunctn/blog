import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

export const Footer = () => {
  return (
    <footer className="mt-8 flex items-center justify-between border-t pt-4 pb-4">
      <div>
        <div>
          <span className="font-semibold text-muted-foreground text-sm">Tunç Türkmen</span>
        </div>
      </div>

      <div>
        <Button asChild variant="link" className="text-muted-foreground">
          <a href={siteConfig.repoSource} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </Button>
      </div>
    </footer>
  );
};
