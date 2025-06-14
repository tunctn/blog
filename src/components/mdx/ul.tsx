import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";

export function UL({ children, className, ...props }: ComponentPropsWithRef<"ul">) {
  return (
    <ul className={cn("my-5 list-inside list-none", className)} {...props}>
      {children}
    </ul>
  );
}
