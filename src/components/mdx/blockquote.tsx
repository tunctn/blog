import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";

export function Blockquote({ children, className, ...props }: ComponentPropsWithRef<"blockquote">) {
  return (
    <blockquote className={cn("my-5 border-l-4 pl-3 text-gray-500 dark:border-gray-600 dark:text-gray-400", className)} {...props}>
      {children}
    </blockquote>
  );
}
