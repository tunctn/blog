import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";
import { withHeadingId } from "./utils";

export function H1({ children, className, ...props }: ComponentPropsWithRef<"h1">) {
  return (
    <h1 className={cn("mb-1 font-bold text-2xl dark:text-gray-100", className)} {...props}>
      {withHeadingId(children)}
    </h1>
  );
}
