import { ArrowUpRight } from "lucide-react";
import { Section } from "@/app/(public)/section";
import { cn } from "@/lib/utils";

type Experience = {
  title: string;
  description: string;
  href?: string;
};
const EXPERIENCE: Experience[] = [
  {
    title: "Software Engineer at nyra health",
    description: "Personalized neuro-rehabilitation, with over 35000 (yes, you read that right) speech and cognitive exercises.",
    href: "https://www.nyra.health",
  },
  {
    title: "Frontend Developer at Diversifi.ai",
    description: "Supercharge the work with 3rd Party Logistics (3PL) companies.",
    href: "https://www.diversifi.ai",
  },
  {
    title: "Full Stack Developer at x10D",
    description: "AI-powered automated content creation platform for social media.",
    href: "https://platform.cre8tera.ai",
  },
  {
    title: "Full Stack Developer & UI Designer at Renegade Music",
    description: "Comprehensive music management and analytics platform for artists and publishers.",
  },
  {
    title: "Frontend Developer at Stella Stays",
    description: "A modern hospitality platform with high-end properties.",
    href: "https://www.stellastays.com",
  },
];

export const Experience = () => {
  return (
    <Section title="Experience">
      <div className="md:-ml-4 flex flex-col gap-2 pt-4 md:w-[calc(100%+16px)]">
        {EXPERIENCE.map((experience) => (
          <ExperienceItem key={experience.title} {...experience} />
        ))}
      </div>
    </Section>
  );
};

const ExperienceItem = (props: Experience) => {
  const url = props.href ?? "#";
  const canOpen = url !== "#";

  if (!canOpen) {
    return <ExperienceItemContent canOpen={canOpen} title={props.title} description={props.description} />;
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <ExperienceItemContent canOpen={canOpen} title={props.title} description={props.description} />
    </a>
  );
};

const ExperienceItemContent = ({ canOpen, title, description }: { canOpen: boolean; title: string; description: string }) => {
  return (
    <div
      className={cn("group relative flex h-max flex-col items-start rounded-md py-2 transition-colors duration-200 md:px-4 ", {
        "md:hover:bg-muted": canOpen,
      })}
    >
      <span className="font-medium text-base">{title}</span>
      <span className="text-muted-foreground text-sm">{description}</span>
      {canOpen && (
        <span className="absolute top-3 right-3 opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      )}
    </div>
  );
};
