import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";

export function OL({ children, className, ...props }: ComponentPropsWithRef<"ol">) {
  return (
    <ol className={cn("my-5 list-inside list-decimal", className)} {...props}>
      {children}
    </ol>
  );
}
