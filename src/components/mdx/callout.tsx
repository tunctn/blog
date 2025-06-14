import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";

interface CalloutProps extends ComponentPropsWithRef<"div"> {
  emoji?: string;
  text?: string;
}

export function Callout({ emoji = "", text = "", children, className, ...props }: CalloutProps) {
  return (
    <div className={cn("my-6 flex items-start bg-gray-200 p-3 text-base dark:bg-[#333] dark:text-gray-300", className)} {...props}>
      <span className="mr-2 block w-6 scale-[1.2] text-center">{emoji}</span>
      <span className="block grow">{text ?? children}</span>
    </div>
  );
}
