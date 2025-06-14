import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";
import { withHeadingId } from "./utils";

export function H2({ children, className, ...props }: ComponentPropsWithRef<"h2">) {
  return (
    <h2 className={cn("group relative my-8 font-bold text-xl", className)} {...props}>
      {withHeadingId(children)}
    </h2>
  );
}
