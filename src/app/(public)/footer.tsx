import { siteConfig } from "@/lib/config";
import { Button } from "../../components/ui/button";

export const Footer = () => {
  return (
    <footer className="flex items-end justify-between pt-14 pb-8">
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
