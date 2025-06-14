import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";
import { Caption } from "./caption";

interface SnippetProps extends ComponentPropsWithRef<"pre"> {
  scroll?: boolean;
  caption?: string | null;
}

export const Snippet = ({ children, scroll = true, caption = null, className, ...props }: SnippetProps) => {
  return (
    <div className="my-6">
      <pre
        className={cn(
          "bg-gray-800 p-4 text-sm text-white dark:bg-[#222] dark:text-gray-300",
          scroll ? "overflow-scroll" : "overflow-hidden whitespace-pre-wrap break-all",
          className,
        )}
        {...props}
      >
        <code>{children}</code>
      </pre>

      {caption != null ? <Caption>{caption}</Caption> : null}
    </div>
  );
};
