import { Section } from "@/app/(public)/section";
import { Paragraph } from "@/components/typography/paragraph";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { siteConfig } from "@/lib/config";

export const About = () => {
  return (
    <Section>
      <Paragraph>
        I’m currently working as a software engineer at{" "}
        <Button asChild variant="link" className="my-0! h-0! py-0! text-base">
          <a href="https://nyra.health" target="_blank" rel="noopener noreferrer">
            nyra health
          </a>
        </Button>
        , where we are building the future of healthcare. I'm originally from Istanbul, Turkey, studied Graphic Design and I moved to
        Vienna, Austria in 2023.
      </Paragraph>

      <Paragraph>
        Over the years I've worked with a lot of <TechologiesTooltip />, but these days I ship product primarily in TypeScript. After being
        involved in numerous projects, I've learned a lot about the importance of good architecture and design patterns, as well as what
        makes a good user experience.
      </Paragraph>

      <Paragraph>
        Outside of work you’ll find me exploring fresh tech through side projects, writing about what I learn, and recharging with drawing
        sessions, long walks with my dog, or a good movie marathon.
      </Paragraph>

      <Paragraph>
        Send an email to{" "}
        <Button asChild variant="link" className="my-0! h-0! py-0! text-base">
          <a href={`mailto:${siteConfig.email}`} target="_blank" rel="noopener noreferrer">
            <span>{siteConfig.email}</span>
          </a>
        </Button>{" "}
        if you want to chat about anything. I'm always open to new opportunities and connections.
      </Paragraph>
    </Section>
  );
};

const TechologiesTooltip = () => {
  return (
    <Tooltip>
      <TooltipTrigger>different technologies*</TooltipTrigger>
      <TooltipContent sideOffset={-5} className="max-w-lg text-center">
        <p>
          PTSD stands for PHP Transfer Stress Disorder. That moment when FileZilla stalled at 97% and you had no idea which half-uploaded
          file was now live.
        </p>
      </TooltipContent>
    </Tooltip>
  );
};
