import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";

export const Paragraph = ({ className, ...props }: ComponentPropsWithRef<"p">) => {
  return <p className={cn("mt-5 text-foreground/80 leading-8", className)} {...props} />;
};
