"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { SpeechIcon } from "lucide-react";
import { useState } from "react";

export const Pronounciation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Tooltip open={isOpen} onOpenChange={setIsOpen}>
      <TooltipTrigger className={cn("opacity-0 transition-opacity group-hover:opacity-100", isOpen && "opacity-100")}>
        <SpeechIcon className="size-5" />
      </TooltipTrigger>
      <TooltipContent align="start">
        <p>Pronounced: Toonch Turk-men </p>
      </TooltipContent>
    </Tooltip>
  );
};
