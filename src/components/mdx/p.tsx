import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";

export function P({ children, className, ...props }: ComponentPropsWithRef<"p">) {
  return (
    <p className={cn("my-5 [blockquote_&]:my-2", className)} {...props}>
      {children}
    </p>
  );
}
