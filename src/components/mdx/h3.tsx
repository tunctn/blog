import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";
import { withHeadingId } from "./utils";

export function H3({ children, className, ...props }: ComponentPropsWithRef<"h3">) {
  return (
    <h3 className={cn("group relative my-8 font-bold text-lg", className)} {...props}>
      {withHeadingId(children)}
    </h3>
  );
}
